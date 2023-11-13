using PkgHelpers
using Documenter: deploydocs, makedocs

makedocs(;
    authors="Uwe Fechner <fechner@aenarete.eu>",
    sitename = "PkgHelpers.jl", 
    modules = [PkgHelpers], 
    doctest = false,
    pages=[
        "Readme" => "README.md",
        "Functions" => "functions.md"
    ])
deploydocs(repo = "github.com/ufechner7/PkgHelpers.jl.git")
