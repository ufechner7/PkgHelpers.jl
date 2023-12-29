var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"CurrentModule = PkgHelpers","category":"page"},{"location":"functions/#Exported-functions","page":"Functions","title":"Exported functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"freeze\nlower_bound\ncopy_manifest","category":"page"},{"location":"functions/#PkgHelpers.freeze","page":"Functions","title":"PkgHelpers.freeze","text":"freeze(pkg; julia=juliaversion(), relaxed = false, copy_manifest=false)\n\nFreezes the current package versions by adding them to the Project.toml file.\n\nArguments\n\npkg:           the module Pkg\njulia:         version string for Julia compatibility, e.g. \"1\" or \"~1.8, ~1.9, ~1.10\"\nrelaxed:       if set to true, the minor version number is omitted from the generated                  compat entries. This means, non-breaking minor updates are allowed.\ncopy_manifest: if true, create a copy of the current Manifest.toml file using                a naming scheme like \"Manifest.toml-1.10-windows\"\n\nFor strict compatibility only add the Julia versions you tested your project with.\n\nExamples\n\nusing Pkg, PkgHelpers\nfreeze(Pkg, copy_manifest=true)\nfreeze(Pkg; julia=\"~1.9, ~1.10\", copy_manifest=true)\n\n\n\n\n\n","category":"function"},{"location":"functions/#PkgHelpers.lower_bound","page":"Functions","title":"PkgHelpers.lower_bound","text":"lower_bound(pkg; julia=nothing, relaxed = false, copy_manifest=false)\n\nAdds the current package versions as lower bound to the compat section of the Project.toml file.\n\nArguments\n\npkg:           the module Pkg\njulia:         version string for Julia compatibility, e.g. \"1\" or \"1.8\"\nrelaxed:       if set to true, the minor version number is omitted                  from the generated compat entries.\ncopy_manifest: if true, create a copy of the current Manifest.toml file using                a naming scheme like \"Manifest.toml-1.10-windows\"\n\nExamples\n\nusing Pkg\nlower_bound(Pkg)\n\n\n\n\n\n","category":"function"},{"location":"functions/#PkgHelpers.copy_manifest","page":"Functions","title":"PkgHelpers.copy_manifest","text":"copy_manifest()\n\nCreate a copy of the current manifest, using a naming scheme like \"Manifest.toml-1.10-windows\" which includes the major Julia version number and the name of the operating system to be added and committed to git as backup.\n\n\n\n\n\n","category":"function"},{"location":"functions/#Internal-helper-functions","page":"Functions","title":"Internal helper functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"project_compat\njuliaversion\ndocu\ntoml_order","category":"page"},{"location":"functions/#PkgHelpers.project_compat","page":"Functions","title":"PkgHelpers.project_compat","text":"project_compat(pkg,relaxed,lowerbound; prn=false, status=\"\")\n\nCreate a dictionary of package dependencies and their current versions.\n\nReturns the full file name of the Project.toml file and the dictionary compat that can be added to the Project.toml file to freeze the package versions.\n\nReturns the tuple (project_file, compat).\n\n\n\n\n\n","category":"function"},{"location":"functions/#PkgHelpers.juliaversion","page":"Functions","title":"PkgHelpers.juliaversion","text":"juliaversion(lowerbound=false)\n\nReturns the version number in the form \"~1.10\" by default and in the form \"1.10\" when called with the parameter true.\n\n\n\n\n\n","category":"function"},{"location":"functions/#PkgHelpers.docu","page":"Functions","title":"PkgHelpers.docu","text":"docu()\n\nDisplay the HTML documentation in a browser window.\n\n\n\n\n\n","category":"function"},{"location":"functions/#PkgHelpers.toml_order","page":"Functions","title":"PkgHelpers.toml_order","text":"toml_order(key)\n\nSpecify the correct order for the different items of the TOML files. The keys name, uuid, autors and version occur in that order at the top of the TOML  as keys pointing to string values. They are followed by the deps,compat,extrasandtargets` keys that point to  dictionaries a level lower.\n\n\n\n\n\n","category":"function"},{"location":"#PkgHelpers","page":"Readme","title":"PkgHelpers","text":"","category":"section"},{"location":"","page":"Readme","title":"Readme","text":"(Image: Dev) (Image: Build Status)","category":"page"},{"location":"#Introduction","page":"Readme","title":"Introduction","text":"","category":"section"},{"location":"","page":"Readme","title":"Readme","text":"This package provides the functions freeze() to freeze your Julia environment by adding the current versions of your package environment to the [compat] section of your project, and the function lower_bound() to set a lower bound of the versions of your packages. If a [compat] section already exists it is overwritten without warning, so make a backup of your Project.toml file first.","category":"page"},{"location":"#Background","page":"Readme","title":"Background","text":"","category":"section"},{"location":"","page":"Readme","title":"Readme","text":"For reproducible research it is important to document the version of all packages you used to achieve a result that you published in a paper. This package makes it easy to do this. Compared to committing the Manifest.toml this approach has the following advantages:","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"the project stays compatible with different Julia versions;\nchanges in the git log are readable (I find the Manifest.toml file unreadable, YMMV).","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"Freezing your package versions has one more advantage: It can avoid unwanted package updates when adding new packages to your project.","category":"page"},{"location":"#Installation","page":"Readme","title":"Installation","text":"","category":"section"},{"location":"","page":"Readme","title":"Readme","text":"Add it to your global environment:  ","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"using Pkg\nPkg.add(\"PkgHelpers\") ","category":"page"},{"location":"#Usage","page":"Readme","title":"Usage","text":"","category":"section"},{"location":"","page":"Readme","title":"Readme","text":"Then change to the project you want to freeze or set a lower bound:","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"cd MyProject\njulia --project","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"and on the Julia prompt type","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"using PkgHelpers, Pkg\nfreeze(Pkg)","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"or","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"using PkgHelpers, Pkg\nlower_bound(Pkg)","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"This will overwrite your current Project.toml, so make sure you committed it to git before calling this function.","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"The following compat entries will be added for each of your direct dependencies:","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"function compat entry range specifier\nfreeze(Pkg) \"=1.2.3\" [1.2.3, 1.2.3] equality\nfreeze(Pkg; relax=true) \"~1.2.3\" [1.2.3, 1.3.0) tilde\nlower_bound(Pkg) \"1.2.3\" [1.2.3, 2.0.0) caret\nlower_bound(Pkg; relax=true) \"1.2\" [1.2.0, 2.0.0) caret","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"If you tested your project with the Julia versions 1.9 and 1.10, use the call","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"freeze(Pkg; julia=\"~1.9, ~1.10\")","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"If you want to set as lower bound an older Julia version, you can also do that:","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"lower_bound(Pkg; julia=\"1.6\")","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"Optionally you can also call the function:","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"copy_manifest()","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"which creates a copy of the Manifest.toml file which includes the Julia version number and operating system name and add and commit this file to git.","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"You can also use ranges, e.g.","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"freeze(Pkg; julia=\"1.6 - 1.11\")","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"If you use a range there must be a space around the hyphen.","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"You can also call:","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"freeze(Pkg; relaxed=true)","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"This omits the patch version from the generated compat entry. The effect is that non-braking updates of the packages are allowed. While updates of the patch version SHOULD be non-braking, this is not always the case. Use this option with care.","category":"page"},{"location":"","page":"Readme","title":"Readme","text":"More info about the version specifiers can be found here.","category":"page"}]
}
