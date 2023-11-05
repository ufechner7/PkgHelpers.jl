using PkgHelpers
using Test
using Pkg

function comp(vec1, vec2, n)
    for i in 1:n
        if vec1[i] != vec2[i]
            return false
        end
    end
    true
end

function filecmp(path1::AbstractString, path2::AbstractString)
    stat1, stat2 = stat(path1), stat(path2)
    if !(isfile(stat1) && isfile(stat2)) || filesize(stat1) != filesize(stat2)
        return false # or should it throw if a file doesn't exist?
    end
    stat1 == stat2 && return true # same file
    open(path1, "r") do file1
        open(path2, "r") do file2
            buf1 = Vector{UInt8}(undef, 32768)
            buf2 = similar(buf1)
            while !eof(file1) && !eof(file2)
                n1 = readbytes!(file1, buf1)
                n2 = readbytes!(file2, buf2)
                n1 != n2 && return false
                if ! comp(buf1, buf2, n1); return false; end
            end
            return eof(file1) == eof(file2)
        end
    end
end

st="Project PkgHelpers v0.1.0\nStatus `~/repos/PkgHelpers.jl/Project.toml`\n  [44cfe95a] Pkg v1.10.0\n  [fa267f1f] TOML v1.0.3\n"

@testset "PkgHelpers.jl" begin
    project_file, compat = PkgHelpers.project_compat(Pkg; status=st)
    @test isabspath(project_file)
    @test basename(project_file) == "Project.toml"
    @test haskey(compat, "TOML")
    @test haskey(compat, "Pkg")
    mydir = tempdir()
    filename = "test-1.toml"
    filename2 = "test-2.toml"
    mytoml = joinpath(mydir, filename)
    cp(filename, mytoml, force=true)
    freeze(nothing; status=st, mytoml=mytoml)
    @test filecmp(filename2, mytoml)
end
