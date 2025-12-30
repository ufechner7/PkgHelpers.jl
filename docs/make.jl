using Pkg
if ("TestEnv" ∈ keys(Pkg.project().dependencies))
    if ! ("Documenter" ∈ keys(Pkg.project().dependencies))
        using TestEnv; TestEnv.activate()
    end
end
using Documenter: deploydocs, makedocs
using PkgHelpers

src="README.md"
dst="docs/src/index.md"
if ! isfile(dst)
    cp(src, dst)
elseif readlines(src) != readlines(dst)
    cp(src, dst; force=true)
end

makedocs(;
    authors="Uwe Fechner <fechner@aenarete.eu>",
    sitename = "PkgHelpers.jl", 
    modules = [PkgHelpers], 
    doctest = false,
    pages=[
        "Readme" => "index.md",
        "Functions" => "functions.md"
    ])
deploydocs(repo = "github.com/ufechner7/PkgHelpers.jl.git")
