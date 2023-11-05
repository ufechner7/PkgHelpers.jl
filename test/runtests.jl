using PkgHelpers
using Test
using Pkg

st="Project PkgHelpers v0.1.0\nStatus `~/repos/PkgHelpers.jl/Project.toml`\n  [44cfe95a] Pkg v1.10.0\n  [fa267f1f] TOML v1.0.3\n"

@testset "PkgHelpers.jl" begin
    project_file, compat = PkgHelpers.project_compat(Pkg; status=st)
    # @test isfile(project_file) skip=true
    @test isabspath(project_file)
    @test basename(project_file) == "Project.toml"
    @test haskey(compat, "TOML")
    @test haskey(compat, "Pkg")
    println(project_file)
    println(compat)
end
