using PkgHelpers
using Test
using Pkg, TOML

function comp(vec1, vec2, n)
    for i in 1:n
        if vec1[i] != vec2[i]
            return false
        end
    end
    true
end

function tomlcmp(path1::AbstractString, path2::AbstractString)
    open(path1) do f1
        open(path2) do f2
            for (l1, l2) in zip(readlines(f1), readlines(f2))
                @test l1 == l2
            end
        end
    end
end

st = "Project PkgHelpers v0.1.0\nStatus `~/repos/PkgHelpers.jl/Project.toml`\n  [44cfe95a] Pkg v1.10.0\n  [fa267f1f] TOML v1.0.3\n"

@testset "freeze" begin
    project_file, compat = PkgHelpers.project_compat(Pkg, false, false; status=st)
    @test basename(project_file) == "Project.toml"
    @test haskey(compat, "TOML")
    @test haskey(compat, "Pkg")
    mydir = mktempdir()
    filename = "test-nocompat.toml"
    filename2 = "test-freeze.toml"
    mytoml = joinpath(mydir, filename)
    cp(filename, mytoml, force=true)
    chmod(mytoml, 0o777)
    PkgHelpers.freeze1(nothing; julia="~1.10", status=st, mytoml=mytoml)
    tomlcmp(filename2, mytoml)
end
@testset "freeze - relaxed" begin
    project_file, compat = PkgHelpers.project_compat(Pkg, true, false; status=st)
    @test basename(project_file) == "Project.toml"
    @test haskey(compat, "TOML")
    @test haskey(compat, "Pkg")
    mydir = mktempdir()
    filename = "test-nocompat.toml"
    filename2 = "test-freeze-relaxed.toml"
    mytoml = joinpath(mydir, filename)
    cp(filename, mytoml, force=true)
    chmod(mytoml, 0o777)
    PkgHelpers.freeze1(nothing; julia="~1.10", relaxed=true, status=st, mytoml=mytoml)
    tomlcmp(filename2, mytoml)
end
@testset "lower_bound" begin
    project_file, compat = PkgHelpers.project_compat(Pkg, false, false; status=st)
    @test basename(project_file) == "Project.toml"
    @test haskey(compat, "TOML")
    @test haskey(compat, "Pkg")
    mydir = mktempdir()
    filename = "test-nocompat.toml"
    filename2 = "test-lower_bound.toml"
    mytoml = joinpath(mydir, filename)
    cp(filename, mytoml, force=true)
    chmod(mytoml, 0o777)
    PkgHelpers.freeze1(nothing; julia="1.6", lowerbound=true, status=st, mytoml=mytoml)
    tomlcmp(filename2, mytoml)
end
@testset "lower_bound - relaxed" begin
    project_file, compat = PkgHelpers.project_compat(Pkg, false, false; status=st)
    @test basename(project_file) == "Project.toml"
    @test haskey(compat, "TOML")
    @test haskey(compat, "Pkg")
    mydir = mktempdir()
    filename = "test-nocompat.toml"
    filename2 = "test-lower_bound-relaxed.toml"
    mytoml = joinpath(mydir, filename)
    cp(filename, mytoml, force=true)
    chmod(mytoml, 0o777)
    PkgHelpers.freeze1(nothing; julia="1.6", relaxed=true, lowerbound=true, status=st, mytoml=mytoml)
    tomlcmp(filename2, mytoml)
end
@testset "order" begin
    project_file, compat = PkgHelpers.project_compat(Pkg, false, false; status=st)
    @test basename(project_file) == "Project.toml"
    @test haskey(compat, "TOML")
    @test haskey(compat, "Pkg")
    mydir = mktempdir()
    filename = "test-unordered.toml"
    filename2 = "test-2.toml"
    mytoml = joinpath(mydir, filename)
    cp(filename, mytoml, force=true)
    chmod(mytoml, 0o777)
    PkgHelpers.freeze1(nothing; julia="~1.10", status=st, mytoml=mytoml)
    tomlcmp(filename2, mytoml)
end
