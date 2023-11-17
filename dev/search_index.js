var documenterSearchIndex = {"docs":
[{"location":"functions/#Exported-Functions","page":"Functions","title":"Exported Functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"CurrentModule = PkgHelpers","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"freeze\nlower_bound\nproject_compat","category":"page"},{"location":"functions/#PkgHelpers.freeze","page":"Functions","title":"PkgHelpers.freeze","text":"freeze(pkg; julia=juliaversion(), relaxed = false)\n\nFreezes the current package versions by adding them to the Project.toml file.\n\nArguments\n\npkg:     the module Pkg\njulia:   version string for Julia compatibility, e.g. \"1\" or \"~1.8, ~1.9, ~1.10\"\nrelaxed: if set to true, the minor version number is omitted from the generated            compat entries. This means, non-breaking minor updates are allowed.\n\nFor strict compatibility only add the Julia versions you tested your project with.\n\nExamples\n\nusing Pkg\nfreeze(Pkg)\n\n\n\n\n\n","category":"function"},{"location":"functions/#PkgHelpers.lower_bound","page":"Functions","title":"PkgHelpers.lower_bound","text":"lower_bound(pkg; julia=juliaversion(true), relaxed = false)\n\nAdds the current package versions as lower bound to the compat section of the Project.toml file.\n\nArguments\n\n- pkg:     the module Pkg\n- julia:   version string for Julia compatibility, e.g. \"1\" or \"1.8\"\n- relaxed: if set to `true`, the minor version number is omitted  \n  from the generated compat entries.\n\nExamples\n\nusing Pkg\nlower_bound(Pkg)\n\n\n\n\n\n","category":"function"},{"location":"functions/#PkgHelpers.project_compat","page":"Functions","title":"PkgHelpers.project_compat","text":"project_compat(pkg,relaxed,lowerbound; prn=false, status=\"\")\n\nCreate a dictionary of package dependencies and their current versions.\n\nReturns the full file name of the Project.toml file and the dictionary compat that can be added to the Project.toml file to freeze the package versions.\n\n\n\n\n\n","category":"function"},{"location":"README/#PkgHelpers","page":"Readme","title":"PkgHelpers","text":"","category":"section"},{"location":"README/","page":"Readme","title":"Readme","text":"(Image: Build Status)","category":"page"},{"location":"README/#Introduction","page":"Readme","title":"Introduction","text":"","category":"section"},{"location":"README/","page":"Readme","title":"Readme","text":"This package provides the functions freeze() to freeze your Julia environment by adding the current versions of your package environment to the [compat] section of your project, and the function lower_bound() to set a lower bound of the versions of your packages. If a [compat] section already exists it is overwritten without warning, so make a backup of your Project.toml file first.","category":"page"},{"location":"README/#Background","page":"Readme","title":"Background","text":"","category":"section"},{"location":"README/","page":"Readme","title":"Readme","text":"For reproducible research it is important to document the version of all packages you used to achieve a result that you published in a paper. This package makes it easy to do this. Compared to committing the Manifest.toml this approach has the following advantages:","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"the project stays compatible with different Julia versions;\nchanges in the git log are readable (I find the Manifest.toml file unreadable, YMMV).","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"Freezing your package versions has one more advantage: It can avoid unwanted package updates when adding new packages to your project.","category":"page"},{"location":"README/#Installation","page":"Readme","title":"Installation","text":"","category":"section"},{"location":"README/","page":"Readme","title":"Readme","text":"Add it to your global environment:  ","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"using Pkg\nPkg.add(\"https://github.com/ufechner7/PkgHelpers.jl\")","category":"page"},{"location":"README/#Usage","page":"Readme","title":"Usage","text":"","category":"section"},{"location":"README/","page":"Readme","title":"Readme","text":"Then change to the project you want to freeze or set a lower bound:","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"cd MyProject\njulia --project","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"and on the Julia prompt type","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"using PkgHelpers, Pkg\nfreeze(Pkg)","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"or","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"using PkgHelpers, Pkg\nlower_bound(Pkg)","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"This will overwrite your current Project.toml, so make sure you committed it to git before calling this function.","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"The following compat entries will be added for each of your direct dependencies:","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"function compat entry range specifier\nfreeze(Pkg) \"=1.2.3\" [1.2.3, 1.2.3] equality\nfreeze(Pkg; relax=true) \"~1.2.3\" [1.2.3, 1.3.0) tilde\nlower_bound(Pkg) \"1.2.3\" [1.2.3, 2.0.0) caret\nlower_bound(Pkg; relax=true) \"1.2\" [1.2.0, 2.0.0) caret","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"If you tested your project with the Julia versions 1.9 and 1.10, use the call","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"freeze(Pkg; julia=\"~1.9, ~1.10\")","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"If you want to set as lower bound an older Julia version, you can also do that:","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"lower_bound(Pkg; julia=\"1.6\")","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"You can also use ranges, e.g.","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"freeze(Pkg; julia=\"1.6 - 1.11\")","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"If you use a range there must be a space around the hyphen.","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"You can also call:","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"freeze(Pkg; relaxed=true)","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"This omits the patch version from the generated compat entry. The effect is that non-braking updates of the packages are allowed. While updates of the patch version SHOULD be non-braking, this is not always the case. Use this option with care.","category":"page"},{"location":"README/","page":"Readme","title":"Readme","text":"More info about the version specifiers can be found here.","category":"page"},{"location":"#PkgHelpers","page":"-","title":"PkgHelpers","text":"","category":"section"},{"location":"","page":"-","title":"-","text":"Helper functions for package management.","category":"page"},{"location":"","page":"-","title":"-","text":"See README on the left.","category":"page"}]
}
