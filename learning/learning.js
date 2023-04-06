const Div_main = document.querySelector(".Div_main");
const Programming_Button = document.querySelector(".Programming"),
    Graphic_Button = document.querySelector(".Graphic"),
    Microsoft_Office_Button = document.querySelector(".Microsoft_Office"),
    Adobe_Button = document.querySelector(".Adobe");

const Back_To_First_Menu = document.querySelectorAll(".Back_To_First_Menu");

const Div_main_Programming = document.querySelector(".Div_main_Programming");
const Programming_Languages = document.querySelector(".Programming_Languages");
const Programming_Programs = document.querySelector(".Programming_Programs");
const Back_To_Programming_Menu = document.querySelectorAll(".Back_To_Programming_Menu");

const Div_main_Programming_Programming_Languages = document.querySelector(".Div_main_Programming_Programming_Languages");

const Div_main_Programming_Programming_Programs = document.querySelector(".Div_main_Programming_Programming_Programs");

const Div_main_Graphic = document.querySelector(".Div_main_Graphic");
const Graphic_Programs = document.querySelector(".Graphic_Programs");

const Div_main_Graphic_Graphic_Programs = document.querySelector(".Div_main_Graphic_Graphic_Programs");
const Back_To_Graphic_Menu = document.querySelector(".Back_To_Graphic_Menu");

const Div_main_Microsoft_Office = document.querySelector(".Div_main_Microsoft_Office");

const Div_main_Adobe = document.querySelector(".Div_main_Adobe");

Programming_Button.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.add("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");
    Div_main_Graphic.classList.remove("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
    Div_main_Microsoft_Office.classList.remove("show_anything_div");
    Div_main_Adobe.classList.remove("show_anything_div");
});

Back_To_First_Menu.forEach((eo) => {
    eo.addEventListener("click", () => {
        Div_main.classList.add("show_anything_div");
        Div_main_Programming.classList.remove("show_anything_div");
        Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
        Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");
        Div_main_Graphic.classList.remove("show_anything_div");
        Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
        Div_main_Microsoft_Office.classList.remove("show_anything_div");
        Div_main_Adobe.classList.remove("show_anything_div");
    });
});

Programming_Languages.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.add("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");
    Div_main_Graphic.classList.remove("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
    Div_main_Microsoft_Office.classList.remove("show_anything_div");
    Div_main_Adobe.classList.remove("show_anything_div");
});

Programming_Programs.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.add("show_anything_div");
    Div_main_Graphic.classList.remove("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
    Div_main_Microsoft_Office.classList.remove("show_anything_div");
    Div_main_Adobe.classList.remove("show_anything_div");
});

Back_To_Programming_Menu.forEach((eo) => {
    eo.addEventListener("click", () => {
        Div_main.classList.remove("show_anything_div");
        Div_main_Programming.classList.add("show_anything_div");
        Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
        Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");

        Div_main_Graphic.classList.remove("show_anything_div");
        Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
        Div_main_Microsoft_Office.classList.remove("show_anything_div");
        Div_main_Adobe.classList.remove("show_anything_div");
    });
});

Graphic_Button.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");

    Div_main_Graphic.classList.add("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
    Div_main_Microsoft_Office.classList.remove("show_anything_div");
    Div_main_Adobe.classList.remove("show_anything_div");
});

Graphic_Programs.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");

    Div_main_Graphic.classList.remove("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.add("show_anything_div");
    Div_main_Microsoft_Office.classList.remove("show_anything_div");
    Div_main_Adobe.classList.remove("show_anything_div");
});

Back_To_Graphic_Menu.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");

    Div_main_Graphic.classList.add("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
    Div_main_Microsoft_Office.classList.remove("show_anything_div");
    Div_main_Adobe.classList.remove("show_anything_div");
});

Microsoft_Office_Button.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");

    Div_main_Graphic.classList.remove("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
    Div_main_Microsoft_Office.classList.add("show_anything_div");
    Div_main_Adobe.classList.remove("show_anything_div");
});

Adobe_Button.addEventListener("click", () => {
    Div_main.classList.remove("show_anything_div");
    Div_main_Programming.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Languages.classList.remove("show_anything_div");
    Div_main_Programming_Programming_Programs.classList.remove("show_anything_div");

    Div_main_Graphic.classList.remove("show_anything_div");
    Div_main_Graphic_Graphic_Programs.classList.remove("show_anything_div");
    Div_main_Microsoft_Office.classList.remove("show_anything_div");
    Div_main_Adobe.classList.add("show_anything_div");
});

const Container_HTML = document.querySelector(".Container_HTML"),
    Container_css = document.querySelector(".Container_css"),
    Container_JavaScript = document.querySelector(".Container_JavaScript"),
    Container_C = document.querySelector(".Container_C"),
    Container_Cpp = document.querySelector(".Container_Cpp"),
    Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019 = document.querySelector(".Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019"),
    Container_Cpp_Mohamed_Eldesoky_2013_2019_2022 = document.querySelector(".Container_Cpp_Mohamed_Eldesoky_2013_2019_2022"),
    Container_Cpp_Adel_Nasim_2017 = document.querySelector(".Container_Cpp_Adel_Nasim_2017"),
    Container_Cpp_Mohammed_Shoshan_2017 = document.querySelector(".Container_Cpp_Mohammed_Shoshan_2017"),
    Container_Cs = document.querySelector(".Container_Cs"),
    Container_Cs_Codographia_2022_2023 = document.querySelector(".Container_Cs_Codographia_2022_2023"),
    Container_Cs_Mohammed_Shoshan_2020_2020to2021 = document.querySelector(".Container_Cs_Mohammed_Shoshan_2020_2020to2021"),
    Container_PHP = document.querySelector(".Container_PHP"),
    Container_Python = document.querySelector(".Container_Python"),
    Container_Python_Mohammed_Shoshan_2017_2017_2017_2018 = document.querySelector(".Container_Python_Mohammed_Shoshan_2017_2017_2017_2018"),
    Container_TypeScript = document.querySelector(".Container_TypeScript"),
    Container_SASS = document.querySelector(".Container_SASS"),
    Container_Canvas = document.querySelector(".Container_Canvas"),
    Container_AJAX = document.querySelector(".Container_AJAX"),
    Container_J_SON = document.querySelector(".Container_J_SON"),
    Container_Vue_js = document.querySelector(".Container_Vue_js"),
    Container_PugJs = document.querySelector(".Container_PugJs"),
    Container_Gulp = document.querySelector(".Container_Gulp"),
    Container_jQuery = document.querySelector(".Container_jQuery"),
    Container_Node_js = document.querySelector(".Container_Node_js"),
    Container_Bootstrap = document.querySelector(".Container_Bootstrap"),
    Container_UML = document.querySelector(".Container_UML"),
    Container_Dart = document.querySelector(".Container_Dart"),
    Container_Fs = document.querySelector(".Container_Fs"),
    Container_Ruby = document.querySelector(".Container_Ruby"),
    Container_Pascal = document.querySelector(".Container_Pascal"),
    Container_Scala = document.querySelector(".Container_Scala"),
    Container_Java = document.querySelector(".Container_Java"),
    Container_Java_Mohammed_Shoshan_2017_2017_2017_2018 = document.querySelector(".Container_Java_Mohammed_Shoshan_2017_2017_2017_2018"),
    Container_Kotlin = document.querySelector(".Container_Kotlin"),
    Container_React = document.querySelector(".Container_React"),
    Container_PyTorch = document.querySelector(".Container_PyTorch"),
    Container_Django = document.querySelector(".Container_Django"),
    Container_Django_Mohammed_Shoshan_2018to2019_2019 = document.querySelector(".Container_Django_Mohammed_Shoshan_2018to2019_2019"),
    Container_Ring = document.querySelector(".Container_Ring"),
    Container_Crystal_Report = document.querySelector(".Container_Crystal_Report"),
    Container_ASP_NET_Core = document.querySelector(".Container_ASP_NET_Core"),
    Container_Visual_Basic = document.querySelector(".Container_Visual_Basic"),
    Container_CS50 = document.querySelector(".Container_CS50"),
    Container_Clean_Code = document.querySelector(".Container_Clean_Code"),
    Container_Command_Lines = document.querySelector(".Container_Command_Lines");

const Container_WordPress = document.querySelector(".Container_WordPress"),
    Container_Larp = document.querySelector(".Container_Larp"),
    Container_Xamarin = document.querySelector(".Container_Xamarin"),
    Container_Flutter = document.querySelector(".Container_Flutter"),
    Container_Flutter_Mohammed_Shoshan_2022 = document.querySelector(".Container_Flutter_Mohammed_Shoshan_2022"),
    Container_Blend_For_Visual_Studio = document.querySelector(".Container_Blend_For_Visual_Studio"),
    Container_Docker = document.querySelector(".Container_Docker"),
    Container_Godot = document.querySelector(".Container_Godot"),
    Container_Unity = document.querySelector(".Container_Unity"),
    Container_Unity_Dani_Krossing_2021to2022_2022 = document.querySelector(".Container_Unity_Dani_Krossing_2021to2022_2022"),
    Container_Unity_Six_wrni_2020 = document.querySelector(".Container_Unity_Six_wrni_2020"),
    Container_Unreal_Engine = document.querySelector(".Container_Unreal_Engine"),
    Container_Android_Studio = document.querySelector(".Container_Android_Studio");

const Container_Maya = document.querySelector(".Container_Maya"),
    Container_MATLAB = document.querySelector(".Container_MATLAB"),
    Container_Prokon = document.querySelector(".Container_Prokon"),
    Container_Autocad = document.querySelector(".Container_Autocad"),
    Container_Civil_3D = document.querySelector(".Container_Civil_3D"),
    Container_Arduino = document.querySelector(".Container_Arduino"),
    Container_Autodesk_Revit = document.querySelector(".Container_Autodesk_Revit");

const Container_Excel = document.querySelector(".Container_Excel"),
    Container_Word = document.querySelector(".Container_Word"),
    Container_Power_Point = document.querySelector(".Container_Power_Point"),
    Container_Access = document.querySelector(".Container_Access"),
    Container_Visio = document.querySelector(".Container_Visio"),
    Container_Publish = document.querySelector(".Container_Publish");

const Container_Adobe_Ps = document.querySelector(".Container_Adobe_Ps"),
    Container_Adobe_Ps_Nour_Design_2020_2020to2022 = document.querySelector(".Container_Adobe_Ps_Nour_Design_2020_2020to2022"),
    Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022 = document.querySelector(".Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022"),
    Container_Adobe_Ai = document.querySelector(".Container_Adobe_Ai"),
    Container_Adobe_Pr = document.querySelector(".Container_Adobe_Pr"),
    Container_Adobe_Xd = document.querySelector(".Container_Adobe_Xd"),
    Container_Adobe_Ae = document.querySelector(".Container_Adobe_Ae"),
    Container_Adobe_Mu = document.querySelector(".Container_Adobe_Mu");

const Exit = document.querySelectorAll(".Exit");

Exit.forEach((eo) => {
    eo.addEventListener("click", () => {
        Container_HTML.close();
        Container_css.close();
        Container_JavaScript.close();
        Container_C.close();
        Container_Cpp.close();
        Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019.close();
        Container_Cpp_Mohamed_Eldesoky_2013_2019_2022.close();
        Container_Cpp_Adel_Nasim_2017.close();
        Container_Cpp_Mohammed_Shoshan_2017.close();
        Container_Cs.close();
        Container_Cs_Codographia_2022_2023.close();
        Container_Cs_Mohammed_Shoshan_2020_2020to2021.close();
        Container_PHP.close();
        Container_Python.close();
        Container_Python_Mohammed_Shoshan_2017_2017_2017_2018.close();
        Container_TypeScript.close();
        Container_SASS.close();
        Container_Canvas.close();
        Container_AJAX.close();
        Container_J_SON.close();
        Container_Vue_js.close();
        Container_PugJs.close();
        Container_Gulp.close();
        Container_jQuery.close();
        Container_Node_js.close();
        Container_Bootstrap.close();
        Container_UML.close();
        Container_Dart.close();
        Container_Fs.close();
        Container_Ruby.close();
        Container_Pascal.close();
        Container_Scala.close();
        Container_Java.close();
        Container_Java_Mohammed_Shoshan_2017_2017_2017_2018.close();
        Container_Kotlin.close();
        Container_React.close();
        Container_PyTorch.close();
        Container_Django.close();
        Container_Django_Mohammed_Shoshan_2018to2019_2019.close();
        Container_Ring.close();
        Container_Crystal_Report.close();
        Container_ASP_NET_Core.close();
        Container_Visual_Basic.close();
        Container_CS50.close();
        Container_Clean_Code.close();
        Container_Command_Lines.close();

        Container_WordPress.close();
        Container_Larp.close();
        Container_Xamarin.close();
        Container_Flutter.close();
        Container_Flutter_Mohammed_Shoshan_2022.close();
        Container_Blend_For_Visual_Studio.close();
        Container_Docker.close();
        Container_Godot.close();
        Container_Unity.close();
        Container_Unity_Dani_Krossing_2021to2022_2022.close();
        Container_Unity_Six_wrni_2020.close();
        Container_Unreal_Engine.close();
        Container_Android_Studio.close();

        Container_Maya.close();
        Container_MATLAB.close();
        Container_Prokon.close();
        Container_Autocad.close();
        Container_Civil_3D.close();
        Container_Arduino.close();
        Container_Autodesk_Revit.close();

        Container_Excel.close();
        Container_Word.close();
        Container_Power_Point.close();
        Container_Access.close();
        Container_Visio.close();
        Container_Publish.close();

        Container_Adobe_Ps.close();
        Container_Adobe_Ps_Nour_Design_2020_2020to2022.close();
        Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022.close();
        Container_Adobe_Ai.close();
        Container_Adobe_Pr.close();
        Container_Adobe_Xd.close();
        Container_Adobe_Ae.close();
        Container_Adobe_Mu.close();
    });
});

const HTML = document.querySelector(".HTML");
const css = document.querySelector(".css");
const JavaScript = document.querySelector(".JavaScript");
const C = document.querySelector(".C");
const Cpp = document.querySelector(".Cpp");
const BK_Programmer_2017_2017_2018_2018to2019_Cpp = document.querySelector(".BK_Programmer_2017_2017_2018_2018to2019_Cpp");
const Mohamed_Eldesoky_2013_2019_2022_Cpp = document.querySelector(".Mohamed_Eldesoky_2013_2019_2022_Cpp");
const Adel_Nasim_2017_Cpp = document.querySelector(".Adel_Nasim_2017_Cpp");
const Mohammed_Shoshan_2017_Cpp = document.querySelector(".Mohammed_Shoshan_2017_Cpp");
const Cs = document.querySelector(".Cs");
const Codographia_2022_2023_Cs = document.querySelector(".Codographia_2022_2023_Cs");
const Mohammed_Shoshan_2020_2020to2021_Cs = document.querySelector(".Mohammed_Shoshan_2020_2020to2021_Cs");
const PHP = document.querySelector(".PHP");
const Python = document.querySelector(".Python");
const Mohammed_Shoshan_2017_2017_2017_2018_Python = document.querySelector(".Mohammed_Shoshan_2017_2017_2017_2018_Python");
const TypeScript = document.querySelector(".TypeScript");
const SASS = document.querySelector(".SASS");
const Canvas = document.querySelector(".Canvas");
const AJAX = document.querySelector(".AJAX");
const J_SON = document.querySelector(".JSON");
const Vue_js = document.querySelector(".Vue_js");
const PugJs = document.querySelector(".PugJs");
const Gulp = document.querySelector(".Gulp");
const jQuery = document.querySelector(".jQuery");
const Node_js = document.querySelector(".Node_js");
const Bootstrap = document.querySelector(".Bootstrap");
const UML = document.querySelector(".UML");
const Dart = document.querySelector(".Dart");
const Fs = document.querySelector(".Fs");
const Ruby = document.querySelector(".Ruby");
const Pascal = document.querySelector(".Pascal");
const Scala = document.querySelector(".Scala");
const Java = document.querySelector(".Java");
const Mohammed_Shoshan_2017_2017_2017_2018_Java = document.querySelector(".Mohammed_Shoshan_2017_2017_2017_2018_Java");
const Kotlin = document.querySelector(".Kotlin");
const React = document.querySelector(".React");
const PyTorch = document.querySelector(".PyTorch");
const Django = document.querySelector(".Django");
const Mohammed_Shoshan_2018to2019_2019_Django = document.querySelector(".Mohammed_Shoshan_2018to2019_2019_Django");
const Ring = document.querySelector(".Ring");
const Crystal_Report = document.querySelector(".Crystal_Report");
const ASP_NET_Core = document.querySelector(".ASP_NET_Core");
const Visual_Basic = document.querySelector(".Visual_Basic");
const CS50 = document.querySelector(".CS50");
const Clean_Code = document.querySelector(".Clean_Code");
const Command_Lines = document.querySelector(".Command_Lines");

const Container_Title_Cpp_Back = document.querySelectorAll(".Container_Title_Cpp_Back");
const Container_Title_Cs_Back = document.querySelectorAll(".Container_Title_Cs_Back");
const Container_Title_Python_Back = document.querySelector(".Container_Title_Python_Back");
const Container_Title_Java_Back = document.querySelector(".Container_Title_Java_Back");
const Container_Title_Django_Back = document.querySelector(".Container_Title_Django_Back");

const WordPress = document.querySelector(".WordPress");
const Larp = document.querySelector(".Larp");
const Xamarin = document.querySelector(".Xamarin");
const Flutter = document.querySelector(".Flutter");
const Mohammed_Shoshan_2022_Flutter = document.querySelector(".Mohammed_Shoshan_2022_Flutter");
const Blend_For_Visual_Studio = document.querySelector(".Blend_For_Visual_Studio");
const Docker = document.querySelector(".Docker");
const Godot = document.querySelector(".Godot");
const Unity = document.querySelector(".Unity");
const Dani_Krossing_2021to2022_2022_Unity = document.querySelector(".Dani_Krossing_2021to2022_2022_Unity");
const Six_wrni_2020_Unity = document.querySelector(".Six_wrni_2020_Unity");
const Unreal_Engine = document.querySelector(".Unreal_Engine");
const Android_Studio = document.querySelector(".Android_Studio");

const Container_Title_Flutter_Back = document.querySelector(".Container_Title_Flutter_Back");
const Container_Title_Unity_Back = document.querySelectorAll(".Container_Title_Unity_Back");

const Maya = document.querySelector(".Maya");
const MATLAB = document.querySelector(".MATLAB");
const Prokon = document.querySelector(".Prokon");
const Autocad = document.querySelector(".Autocad");
const Civil_3D = document.querySelector(".Civil_3D");
const Arduino = document.querySelector(".Arduino");
const Autodesk_Revit = document.querySelector(".Autodesk_Revit");

const Excel = document.querySelector(".Excel");
const Word = document.querySelector(".Word");
const Power_Point = document.querySelector(".Power_Point");
const Access = document.querySelector(".Access");
const Visio = document.querySelector(".Visio");
const Publish = document.querySelector(".Publish");

const Adobe_Ps = document.querySelector(".Adobe_Ps");
const Nour_Design_2020_2020to2022_Adobe_Ps = document.querySelector(".Nour_Design_2020_2020to2022_Adobe_Ps");
const Amr_Atallah_2017to2020_2018to2022_Adobe_Ps = document.querySelector(".Amr_Atallah_2017to2020_2018to2022_Adobe_Ps");
const Adobe_Ai = document.querySelector(".Adobe_Ai");
const Adobe_Pr = document.querySelector(".Adobe_Pr");
const Adobe_Xd = document.querySelector(".Adobe_Xd");
const Adobe_Ae = document.querySelector(".Adobe_Ae");
const Adobe_Mu = document.querySelector(".Adobe_Mu");

const Container_Title_Adobe_Ps_Back = document.querySelectorAll(".Container_Title_Adobe_Ps_Back");

HTML.addEventListener("click", () => {
    Container_HTML.showModal();
});

css.addEventListener("click", () => {
    Container_css.showModal();
});

JavaScript.addEventListener("click", () => {
    Container_JavaScript.showModal();
});

C.addEventListener("click", () => {
    Container_C.showModal();
});

Cpp.addEventListener("click", () => {
    Container_Cpp.showModal();
});

BK_Programmer_2017_2017_2018_2018to2019_Cpp.addEventListener("click", () => {
    Container_Cpp.close();
    Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019.showModal();
});

Mohamed_Eldesoky_2013_2019_2022_Cpp.addEventListener("click", () => {
    Container_Cpp.close();
    Container_Cpp_Mohamed_Eldesoky_2013_2019_2022.showModal();
});

Adel_Nasim_2017_Cpp.addEventListener("click", () => {
    Container_Cpp.close();
    Container_Cpp_Adel_Nasim_2017.showModal();
});

Mohammed_Shoshan_2017_Cpp.addEventListener("click", () => {
    Container_Cpp.close();
    Container_Cpp_Mohammed_Shoshan_2017.showModal();
});

Container_Title_Cpp_Back.forEach((eo) => {
    eo.addEventListener("click", () => {
        Container_Cpp.showModal();
        Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019.close();
        Container_Cpp_Mohamed_Eldesoky_2013_2019_2022.close();
        Container_Cpp_Adel_Nasim_2017.close();
        Container_Cpp_Mohammed_Shoshan_2017.close();
    });
});

Cs.addEventListener("click", () => {
    Container_Cs.showModal();
});

Codographia_2022_2023_Cs.addEventListener("click", () => {
    Container_Cs.close();
    Container_Cs_Codographia_2022_2023.showModal();
});

Mohammed_Shoshan_2020_2020to2021_Cs.addEventListener("click", () => {
    Container_Cs.close();
    Container_Cs_Mohammed_Shoshan_2020_2020to2021.showModal();
});

Container_Title_Cs_Back.forEach((eo) => {
    eo.addEventListener("click", () => {
        Container_Cs.showModal();
        Container_Cs_Codographia_2022_2023.close();
        Container_Cs_Mohammed_Shoshan_2020_2020to2021.close();
    });
});

PHP.addEventListener("click", () => {
    Container_PHP.showModal();
});

Python.addEventListener("click", () => {
    Container_Python.showModal();
});

Mohammed_Shoshan_2017_2017_2017_2018_Python.addEventListener("click", () => {
    Container_Python.close();
    Container_Python_Mohammed_Shoshan_2017_2017_2017_2018.showModal();
});


Container_Title_Python_Back.addEventListener("click", () => {
    Container_Python.showModal();
    Container_Python_Mohammed_Shoshan_2017_2017_2017_2018.close();
});

TypeScript.addEventListener("click", () => {
    Container_TypeScript.showModal();
});

SASS.addEventListener("click", () => {
    Container_SASS.showModal();
});

Canvas.addEventListener("click", () => {
    Container_Canvas.showModal();
});

AJAX.addEventListener("click", () => {
    Container_AJAX.showModal();
});

J_SON.addEventListener("click", () => {
    Container_J_SON.showModal();
});

Vue_js.addEventListener("click", () => {
    Container_Vue_js.showModal();
});

PugJs.addEventListener("click", () => {
    Container_PugJs.showModal();
});

Gulp.addEventListener("click", () => {
    Container_Gulp.showModal();
});

jQuery.addEventListener("click", () => {
    Container_jQuery.showModal();
});

Node_js.addEventListener("click", () => {
    Container_Node_js.showModal();
});

Bootstrap.addEventListener("click", () => {
    Container_Bootstrap.showModal();
});

UML.addEventListener("click", () => {
    Container_UML.showModal();
});

Dart.addEventListener("click", () => {
    Container_Dart.showModal();
});

Fs.addEventListener("click", () => {
    Container_Fs.showModal();
});

Ruby.addEventListener("click", () => {
    Container_Ruby.showModal();
});

Pascal.addEventListener("click", () => {
    Container_Pascal.showModal();
});

Scala.addEventListener("click", () => {
    Container_Scala.showModal();
});

Java.addEventListener("click", () => {
    Container_Java.showModal();
});

Mohammed_Shoshan_2017_2017_2017_2018_Java.addEventListener("click", () => {
    Container_Java.close();
    Container_Java_Mohammed_Shoshan_2017_2017_2017_2018.showModal();
});

Container_Title_Java_Back.addEventListener("click", () => {
    Container_Java.showModal();
    Container_Java_Mohammed_Shoshan_2017_2017_2017_2018.close();
});

Kotlin.addEventListener("click", () => {
    Container_Kotlin.showModal();
});

React.addEventListener("click", () => {
    Container_React.showModal();
});

PyTorch.addEventListener("click", () => {
    Container_PyTorch.showModal();
});

Django.addEventListener("click", () => {
    Container_Django.showModal();
});

Mohammed_Shoshan_2018to2019_2019_Django.addEventListener("click", () => {
    Container_Django.close();
    Container_Django_Mohammed_Shoshan_2018to2019_2019.showModal();
});

Container_Title_Django_Back.addEventListener("click", () => {
    Container_Django.showModal();
    Container_Django_Mohammed_Shoshan_2018to2019_2019.close();
});

Ring.addEventListener("click", () => {
    Container_Ring.showModal();
});

Crystal_Report.addEventListener("click", () => {
    Container_Crystal_Report.showModal();
});

ASP_NET_Core.addEventListener("click", () => {
    Container_ASP_NET_Core.showModal();
});

Visual_Basic.addEventListener("click", () => {
    Container_Visual_Basic.showModal();
});

CS50.addEventListener("click", () => {
    Container_CS50.showModal();
});

Clean_Code.addEventListener("click", () => {
    Container_Clean_Code.showModal();
});

Command_Lines.addEventListener("click", () => {
    Container_Command_Lines.showModal();
});

WordPress.addEventListener("click", () => {
    Container_WordPress.showModal();
});

Larp.addEventListener("click", () => {
    Container_Larp.showModal();
});

Xamarin.addEventListener("click", () => {
    Container_Xamarin.showModal();
});

Flutter.addEventListener("click", () => {
    Container_Flutter.showModal();
});

Mohammed_Shoshan_2022_Flutter.addEventListener("click", () => {
    Container_Flutter.close();
    Container_Flutter_Mohammed_Shoshan_2022.showModal();
});

Container_Title_Flutter_Back.addEventListener("click", () => {
    Container_Flutter.showModal();
    Container_Flutter_Mohammed_Shoshan_2022.close();
});

Blend_For_Visual_Studio.addEventListener("click", () => {
    Container_Blend_For_Visual_Studio.showModal();
});

Docker.addEventListener("click", () => {
    Container_Docker.showModal();
});

Godot.addEventListener("click", () => {
    Container_Godot.showModal();
});

Unity.addEventListener("click", () => {
    Container_Unity.showModal();
});

Dani_Krossing_2021to2022_2022_Unity.addEventListener("click", () => {
    Container_Unity.close();
    Container_Unity_Dani_Krossing_2021to2022_2022.showModal();
});

Six_wrni_2020_Unity.addEventListener("click", () => {
    Container_Unity.close();
    Container_Unity_Six_wrni_2020.showModal();
});

Container_Title_Unity_Back.forEach((eo) => {
    eo.addEventListener("click", () => {
        Container_Unity.showModal();
        Container_Unity_Dani_Krossing_2021to2022_2022.close();
        Container_Unity_Six_wrni_2020.close();
    });
});

Unreal_Engine.addEventListener("click", () => {
    Container_Unreal_Engine.showModal();
});

Android_Studio.addEventListener("click", () => {
    Container_Android_Studio.showModal();
});

Maya.addEventListener("click", () => {
    Container_Maya.showModal();
});

MATLAB.addEventListener("click", () => {
    Container_MATLAB.showModal();
});

Prokon.addEventListener("click", () => {
    Container_Prokon.showModal();
});

Autocad.addEventListener("click", () => {
    Container_Autocad.showModal();
});

Civil_3D.addEventListener("click", () => {
    Container_Civil_3D.showModal();
});

Arduino.addEventListener("click", () => {
    Container_Arduino.showModal();
});

Autodesk_Revit.addEventListener("click", () => {
    Container_Autodesk_Revit.showModal();
});

Excel.addEventListener("click", () => {
    Container_Excel.showModal();
});

Word.addEventListener("click", () => {
    Container_Word.showModal();
});

Power_Point.addEventListener("click", () => {
    Container_Power_Point.showModal();
});

Access.addEventListener("click", () => {
    Container_Access.showModal();
});

Visio.addEventListener("click", () => {
    Container_Visio.showModal();
});

Publish.addEventListener("click", () => {
    Container_Publish.showModal();
});

Adobe_Ps.addEventListener("click", () => {
    Container_Adobe_Ps.showModal();
});

Nour_Design_2020_2020to2022_Adobe_Ps.addEventListener("click", () => {
    Container_Adobe_Ps.close();
    Container_Adobe_Ps_Nour_Design_2020_2020to2022.showModal();
});

Amr_Atallah_2017to2020_2018to2022_Adobe_Ps.addEventListener("click", () => {
    Container_Adobe_Ps.close();
    Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022.showModal();
});

Container_Title_Adobe_Ps_Back.forEach((eo) => {
    eo.addEventListener("click", () => {
        Container_Adobe_Ps.showModal();
        Container_Adobe_Ps_Nour_Design_2020_2020to2022.close();
        Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022.close();
    });
});

Adobe_Ai.addEventListener("click", () => {
    Container_Adobe_Ai.showModal();
});

Adobe_Pr.addEventListener("click", () => {
    Container_Adobe_Pr.showModal();
});

Adobe_Xd.addEventListener("click", () => {
    Container_Adobe_Xd.showModal();
});

Adobe_Ae.addEventListener("click", () => {
    Container_Adobe_Ae.showModal();
});

Adobe_Mu.addEventListener("click", () => {
    Container_Adobe_Mu.showModal();
});