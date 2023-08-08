// import {  } from './.js';

main()
function main() {
    mainButtons();

    HTML();
    css();
    JavaScript();
    C();
    Cpp();
    Cpp_BK_Programmer_2017_2017_2018_2018to2019();
    Cpp_Mohamed_Eldesoky_2013_2019_2022();
    Cpp_Adel_Nasim_2017();
    Cpp_Mohammed_Shoshan_2017();
    Cs();
    Cs_Codographia_2022_2023();
    Cs_Mohammed_Shoshan_2020_2020to2021();
    PHP();
    Python();
    Python_Mohammed_Shoshan_2017_2017_2017_2018();
    TypeScript();
    Git();
    SASS();
    Canvas();
    AJAX();
    JSON();
    Vue_js();
    PugJs();
    Gulp();
    jQuery();
    // Node_js();
    Bootstrap();
    UML();
    Dart();
    Fs();
    Ruby();
    Pascal();
    Scala();
    Java();
    Java_Mohammed_Shoshan_2017_2017_2017_2018();
    Kotlin();
    React();
    PyTorch();
    Django();
    Django_Mohammed_Shoshan_2018to2019_2019();
    Ring();
    Crystal_Report();
    ASP_NET_Core();
    Visual_Basic();
    CS50();
    Clean_Code();
    Command_Lines();

    WordPress();
    Larp();
    Xamarin();
    MAUI();
    Flutter();
    Next_js();
    Laravel();
    Flutter_Mohammed_Shoshan_2022();
    Blend_For_Visual_Studio();
    Docker();
    Godot();
    Unity();
    Unity_Dani_Krossing_2021to2022_2022();
    Unity_Six_wrni_2020();
    Unreal_Engine();
    SwiftUI();
    Android_Studio();
    Jetpack_Compose();
    MVVM();
    MySQL();
    MongoDB();

    Maya();
    MATLAB();
    Prokon();
    Autocad();
    Civil_3D();
    Arduino();
    Autodesk_Revit();

    Excel();
    Word();
    Power_Point();
    Access();
    Visio();
    Publish();

    Adobe_Ps();
    Adobe_Ps_Nour_Design_2020_2020to2022();
    Adobe_Ps_Amr_Atallah_2017to2020_2018to2022();
    Adobe_Ai();
    Adobe_Pr();
    Adobe_Xd();
    Adobe_Ae();
    Adobe_Mu();

    Exit();
    Cpp_Back();
    Cs_Back();
    Python_Back();
    Java_Back();
    Django_Back();
    Flutter_Back();
    Unity_Back();
    Adobe_Ps_Back();
}

function mainButtons() {
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
};

function HTML() {
    const Container_HTML = document.querySelector(".Container_HTML");

    const HTML = document.querySelector(".HTML");

    HTML.addEventListener("click", () => { if (!Container_HTML.open) Container_HTML.showModal(); });

    return Container_HTML;
};

function css() {
    const Container_css = document.querySelector(".Container_css");

    const css = document.querySelector(".css");

    css.addEventListener("click", () => { if (!Container_css.open) Container_css.showModal(); });

    return Container_css;
};

function JavaScript() {
    const Container_JavaScript = document.querySelector(".Container_JavaScript");

    const JavaScript = document.querySelector(".JavaScript");

    JavaScript.addEventListener("click", () => { if (!Container_JavaScript.open) Container_JavaScript.showModal(); });

    return Container_JavaScript;
};

function C() {
    const Container_C = document.querySelector(".Container_C");

    const C = document.querySelector(".C");

    C.addEventListener("click", () => { if (!Container_C.open) Container_C.showModal(); });

    return Container_C;
};

function Cpp() {
    const Container_Cpp = document.querySelector(".Container_Cpp");

    const Cpp = document.querySelector(".Cpp");

    Cpp.addEventListener("click", () => { if (!Container_Cpp.open) Container_Cpp.showModal(); });

    return Container_Cpp;
};

function Cpp_BK_Programmer_2017_2017_2018_2018to2019() {
    const Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019 = document.querySelector(".Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019");

    const BK_Programmer_2017_2017_2018_2018to2019_Cpp = document.querySelector(".BK_Programmer_2017_2017_2018_2018to2019_Cpp");

    BK_Programmer_2017_2017_2018_2018to2019_Cpp.addEventListener("click", () => {
        if (!Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019.open) {
            Cpp().close();
            Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019.showModal();
        }
    });

    return Container_Cpp_BK_Programmer_2017_2017_2018_2018to2019;
};

function Cpp_Mohamed_Eldesoky_2013_2019_2022() {
    const Container_Cpp_Mohamed_Eldesoky_2013_2019_2022 = document.querySelector(".Container_Cpp_Mohamed_Eldesoky_2013_2019_2022");

    const Mohamed_Eldesoky_2013_2019_2022_Cpp = document.querySelector(".Mohamed_Eldesoky_2013_2019_2022_Cpp");

    Mohamed_Eldesoky_2013_2019_2022_Cpp.addEventListener("click", () => {
        if (!Container_Cpp_Mohamed_Eldesoky_2013_2019_2022.open) {
            Cpp().close();
            Container_Cpp_Mohamed_Eldesoky_2013_2019_2022.showModal();
        }
    });

    return Container_Cpp_Mohamed_Eldesoky_2013_2019_2022;
};

function Cpp_Adel_Nasim_2017() {
    const Container_Cpp_Adel_Nasim_2017 = document.querySelector(".Container_Cpp_Adel_Nasim_2017");

    const Adel_Nasim_2017_Cpp = document.querySelector(".Adel_Nasim_2017_Cpp");

    Adel_Nasim_2017_Cpp.addEventListener("click", () => {
        if (!Container_Cpp_Adel_Nasim_2017.open) {
            Cpp().close();
            Container_Cpp_Adel_Nasim_2017.showModal();
        }
    });

    return Container_Cpp_Adel_Nasim_2017;
};

function Cpp_Mohammed_Shoshan_2017() {
    const Container_Cpp_Mohammed_Shoshan_2017 = document.querySelector(".Container_Cpp_Mohammed_Shoshan_2017");

    const Mohammed_Shoshan_2017_Cpp = document.querySelector(".Mohammed_Shoshan_2017_Cpp");

    Mohammed_Shoshan_2017_Cpp.addEventListener("click", () => {
        if (!Container_Cpp_Mohammed_Shoshan_2017.open) {
            Cpp().close();
            Container_Cpp_Mohammed_Shoshan_2017.showModal();
        }
    });

    return Container_Cpp_Mohammed_Shoshan_2017;
};

function Cs() {
    const Container_Cs = document.querySelector(".Container_Cs");

    const Cs = document.querySelector(".Cs");

    Cs.addEventListener("click", () => { if (!Container_Cs.open) Container_Cs.showModal(); });

    return Container_Cs;
};

function Cs_Codographia_2022_2023() {
    const Container_Cs_Codographia_2022_2023 = document.querySelector(".Container_Cs_Codographia_2022_2023");

    const Codographia_2022_2023_Cs = document.querySelector(".Codographia_2022_2023_Cs");

    Codographia_2022_2023_Cs.addEventListener("click", () => {
        if (!Container_Cs_Codographia_2022_2023.open) {
            Cs().close();
            Container_Cs_Codographia_2022_2023.showModal();
        }
    });

    return Container_Cs_Codographia_2022_2023;
};

function Cs_Mohammed_Shoshan_2020_2020to2021() {
    const Container_Cs_Mohammed_Shoshan_2020_2020to2021 = document.querySelector(".Container_Cs_Mohammed_Shoshan_2020_2020to2021");

    const Mohammed_Shoshan_2020_2020to2021_Cs = document.querySelector(".Mohammed_Shoshan_2020_2020to2021_Cs");

    Mohammed_Shoshan_2020_2020to2021_Cs.addEventListener("click", () => {
        if (!Container_Cs_Mohammed_Shoshan_2020_2020to2021.open) {
            Cs().close();
            Container_Cs_Mohammed_Shoshan_2020_2020to2021.showModal();
        }
    });

    return Container_Cs_Mohammed_Shoshan_2020_2020to2021;
};

function PHP() {
    const Container_PHP = document.querySelector(".Container_PHP");

    const PHP = document.querySelector(".PHP");

    PHP.addEventListener("click", () => { if (!Container_PHP.open) Container_PHP.showModal(); });

    return Container_PHP;
};

function Python() {
    const Container_Python = document.querySelector(".Container_Python");

    const Python = document.querySelector(".Python");

    Python.addEventListener("click", () => { if (!Container_Python.open) Container_Python.showModal(); });

    return Container_Python;
};

function Python_Mohammed_Shoshan_2017_2017_2017_2018() {
    const Container_Python_Mohammed_Shoshan_2017_2017_2017_2018 = document.querySelector(".Container_Python_Mohammed_Shoshan_2017_2017_2017_2018");

    const Mohammed_Shoshan_2017_2017_2017_2018_Python = document.querySelector(".Mohammed_Shoshan_2017_2017_2017_2018_Python");

    Mohammed_Shoshan_2017_2017_2017_2018_Python.addEventListener("click", () => {
        if (!Container_Python_Mohammed_Shoshan_2017_2017_2017_2018.open) {
            Python().close();
            Container_Python_Mohammed_Shoshan_2017_2017_2017_2018.showModal();
        }
    });

    return Container_Python_Mohammed_Shoshan_2017_2017_2017_2018;
};

function TypeScript() {
    const Container_TypeScript = document.querySelector(".Container_TypeScript");

    const TypeScript = document.querySelector(".TypeScript");

    TypeScript.addEventListener("click", () => { if (!Container_TypeScript.open) Container_TypeScript.showModal(); });

    return Container_TypeScript;
};

function Git() {
    const Container_Git = document.querySelector(".Container_Git");

    const Git = document.querySelector(".Git");

    Git.addEventListener("click", () => { if (!Container_Git.open) Container_Git.showModal(); });

    return Container_Git;
};

function SASS() {
    const Container_SASS = document.querySelector(".Container_SASS");

    const SASS = document.querySelector(".SASS");

    SASS.addEventListener("click", () => { if (!Container_SASS.open) Container_SASS.showModal(); });

    return Container_SASS;
};

function Canvas() {
    const Container_Canvas = document.querySelector(".Container_Canvas");

    const Canvas = document.querySelector(".Canvas");

    Canvas.addEventListener("click", () => { if (!Container_Canvas.open) Container_Canvas.showModal(); });

    return Container_Canvas;
};

function AJAX() {
    const Container_AJAX = document.querySelector(".Container_AJAX");

    const AJAX = document.querySelector(".AJAX");

    AJAX.addEventListener("click", () => { if (!Container_AJAX.open) Container_AJAX.showModal(); });

    return Container_AJAX;
};

function JSON() {
    const Container_JSON = document.querySelector(".Container_JSON");

    const JSON = document.querySelector(".JSON");

    JSON.addEventListener("click", () => { if (!Container_JSON.open) Container_JSON.showModal(); });

    return Container_JSON;
};

function Vue_js() {
    const Container_Vue_js = document.querySelector(".Container_Vue_js");

    const Vue_js = document.querySelector(".Vue_js");

    Vue_js.addEventListener("click", () => { if (!Container_Vue_js.open) Container_Vue_js.showModal(); });

    return Container_Vue_js;
};

function PugJs() {
    const Container_PugJs = document.querySelector(".Container_PugJs");

    const PugJs = document.querySelector(".PugJs");

    PugJs.addEventListener("click", () => { if (!Container_PugJs.open) Container_PugJs.showModal(); });

    return Container_PugJs;
};

function Gulp() {
    const Container_Gulp = document.querySelector(".Container_Gulp");

    const Gulp = document.querySelector(".Gulp");

    Gulp.addEventListener("click", () => { if (!Container_Gulp.open) Container_Gulp.showModal(); });

    return Container_Gulp;
};

function jQuery() {
    const Container_jQuery = document.querySelector(".Container_jQuery");

    const jQuery = document.querySelector(".jQuery");

    jQuery.addEventListener("click", () => { if (!Container_jQuery.open) Container_jQuery.showModal(); });

    return Container_jQuery;
};

// function Node_js() {
//     const Container_Node_js = document.querySelector(".Container_Node_js");

//     const Node_js = document.querySelector(".Node_js");

//     Node_js.addEventListener("click", () => { if (!Container_Node_js.open) Container_Node_js.showModal(); });

//     return Container_Node_js;
// };

function Bootstrap() {
    const Container_Bootstrap = document.querySelector(".Container_Bootstrap");

    const Bootstrap = document.querySelector(".Bootstrap");

    Bootstrap.addEventListener("click", () => { if (!Container_Bootstrap.open) Container_Bootstrap.showModal(); });

    return Container_Bootstrap;
};

function UML() {
    const Container_UML = document.querySelector(".Container_UML");

    const UML = document.querySelector(".UML");

    UML.addEventListener("click", () => { if (!Container_UML.open) Container_UML.showModal(); });

    return Container_UML;
};

function Dart() {
    const Container_Dart = document.querySelector(".Container_Dart");

    const Dart = document.querySelector(".Dart");

    Dart.addEventListener("click", () => { if (!Container_Dart.open) Container_Dart.showModal(); });

    return Container_Dart;
};

function Fs() {
    const Container_Fs = document.querySelector(".Container_Fs");

    const Fs = document.querySelector(".Fs");

    Fs.addEventListener("click", () => { if (!Container_Fs.open) Container_Fs.showModal(); });

    return Container_Fs;
};

function Ruby() {
    const Container_Ruby = document.querySelector(".Container_Ruby");

    const Ruby = document.querySelector(".Ruby");

    Ruby.addEventListener("click", () => { if (!Container_Ruby.open) Container_Ruby.showModal(); });

    return Container_Ruby;
};

function Pascal() {
    const Container_Pascal = document.querySelector(".Container_Pascal");

    const Pascal = document.querySelector(".Pascal");

    Pascal.addEventListener("click", () => { if (!Container_Pascal.open) Container_Pascal.showModal(); });

    return Container_Pascal;
};

function Scala() {
    const Container_Scala = document.querySelector(".Container_Scala");

    const Scala = document.querySelector(".Scala");

    Scala.addEventListener("click", () => { if (!Container_Scala.open) Container_Scala.showModal(); });

    return Container_Scala;
};

function Java() {
    const Container_Java = document.querySelector(".Container_Java");

    const Java = document.querySelector(".Java");

    Java.addEventListener("click", () => { if (!Container_Java.open) Container_Java.showModal(); });

    return Container_Java;
};

function Java_Mohammed_Shoshan_2017_2017_2017_2018() {
    const Container_Java_Mohammed_Shoshan_2017_2017_2017_2018 = document.querySelector(".Container_Java_Mohammed_Shoshan_2017_2017_2017_2018");

    const Mohammed_Shoshan_2017_2017_2017_2018_Java = document.querySelector(".Mohammed_Shoshan_2017_2017_2017_2018_Java");

    Mohammed_Shoshan_2017_2017_2017_2018_Java.addEventListener("click", () => {
        if (!Container_Java_Mohammed_Shoshan_2017_2017_2017_2018.open) {
            Java().close();
            Container_Java_Mohammed_Shoshan_2017_2017_2017_2018.showModal();
        }
    });

    return Container_Java_Mohammed_Shoshan_2017_2017_2017_2018;
};

function Kotlin() {
    const Container_Kotlin = document.querySelector(".Container_Kotlin");

    const Kotlin = document.querySelector(".Kotlin");

    Kotlin.addEventListener("click", () => { if (!Container_Kotlin.open) Container_Kotlin.showModal(); });

    return Container_Kotlin;
};

function React() {
    const Container_React = document.querySelector(".Container_React");

    const React = document.querySelector(".React");

    React.addEventListener("click", () => { if (!Container_React.open) Container_React.showModal(); });

    return Container_React;
};

function PyTorch() {
    const Container_PyTorch = document.querySelector(".Container_PyTorch");

    const PyTorch = document.querySelector(".PyTorch");

    PyTorch.addEventListener("click", () => { if (!Container_PyTorch.open) Container_PyTorch.showModal(); });

    return Container_PyTorch;
};

function Django() {
    const Container_Django = document.querySelector(".Container_Django");

    const Django = document.querySelector(".Django");

    Django.addEventListener("click", () => { if (!Container_Django.open) Container_Django.showModal(); });

    return Container_Django;
};

function Django_Mohammed_Shoshan_2018to2019_2019() {
    const Container_Django_Mohammed_Shoshan_2018to2019_2019 = document.querySelector(".Container_Django_Mohammed_Shoshan_2018to2019_2019");

    const Mohammed_Shoshan_2018to2019_2019_Django = document.querySelector(".Mohammed_Shoshan_2018to2019_2019_Django");

    Mohammed_Shoshan_2018to2019_2019_Django.addEventListener("click", () => {
        if (!Container_Django_Mohammed_Shoshan_2018to2019_2019.open) {
            Django().close();
            Container_Django_Mohammed_Shoshan_2018to2019_2019.showModal();
        }
    });

    return Container_Django_Mohammed_Shoshan_2018to2019_2019;
};

function Ring() {
    const Container_Ring = document.querySelector(".Container_Ring");

    const Ring = document.querySelector(".Ring");

    Ring.addEventListener("click", () => { if (!Container_Ring.open) Container_Ring.showModal(); });

    return Container_Ring;
};

function Crystal_Report() {
    const Container_Crystal_Report = document.querySelector(".Container_Crystal_Report");

    const Crystal_Report = document.querySelector(".Crystal_Report");

    Crystal_Report.addEventListener("click", () => { if (!Container_Crystal_Report.open) Container_Crystal_Report.showModal(); });

    return Container_Crystal_Report;
};

function ASP_NET_Core() {
    const Container_ASP_NET_Core = document.querySelector(".Container_ASP_NET_Core");

    const ASP_NET_Core = document.querySelector(".ASP_NET_Core");

    ASP_NET_Core.addEventListener("click", () => { if (!Container_ASP_NET_Core.open) Container_ASP_NET_Core.showModal(); });

    return Container_ASP_NET_Core;
};

function Visual_Basic() {
    const Container_Visual_Basic = document.querySelector(".Container_Visual_Basic");

    const Visual_Basic = document.querySelector(".Visual_Basic");

    Visual_Basic.addEventListener("click", () => { if (!Container_Visual_Basic.open) Container_Visual_Basic.showModal(); });

    return Container_Visual_Basic;
};

function CS50() {
    const Container_CS50 = document.querySelector(".Container_CS50");

    const CS50 = document.querySelector(".CS50");

    CS50.addEventListener("click", () => { if (!Container_CS50.open) Container_CS50.showModal(); });

    return Container_CS50;
};

function Clean_Code() {
    const Container_Clean_Code = document.querySelector(".Container_Clean_Code");

    const Clean_Code = document.querySelector(".Clean_Code");

    Clean_Code.addEventListener("click", () => { if (!Container_Clean_Code.open) Container_Clean_Code.showModal(); });

    return Container_Clean_Code;
};

function Command_Lines() {
    const Container_Command_Lines = document.querySelector(".Container_Command_Lines");

    const Command_Lines = document.querySelector(".Command_Lines");

    Command_Lines.addEventListener("click", () => { if (!Container_Command_Lines.open) Container_Command_Lines.showModal(); });

    return Container_Command_Lines;
};

function WordPress() {
    const Container_WordPress = document.querySelector(".Container_WordPress");

    const WordPress = document.querySelector(".WordPress");

    WordPress.addEventListener("click", () => { if (!Container_WordPress.open) Container_WordPress.showModal(); });

    return Container_WordPress;
};

function Larp() {
    const Container_Larp = document.querySelector(".Container_Larp");

    const Larp = document.querySelector(".Larp");

    Larp.addEventListener("click", () => { if (!Container_Larp.open) Container_Larp.showModal(); });

    return Container_Larp;
};

function Xamarin() {
    const Container_Xamarin = document.querySelector(".Container_Xamarin");

    const Xamarin = document.querySelector(".Xamarin");

    Xamarin.addEventListener("click", () => { if (!Container_Xamarin.open) Container_Xamarin.showModal(); });

    return Container_Xamarin;
};

function MAUI() {
    const Container_MAUI = document.querySelector(".Container_MAUI");

    const MAUI = document.querySelector(".MAUI");

    MAUI.addEventListener("click", () => { if (!Container_MAUI.open) Container_MAUI.showModal(); });

    return Container_MAUI;
};

function Flutter() {
    const Container_Flutter = document.querySelector(".Container_Flutter");

    const Flutter = document.querySelector(".Flutter");

    Flutter.addEventListener("click", () => { if (!Container_Flutter.open) Container_Flutter.showModal(); });

    return Container_Flutter;
};

function Flutter_Mohammed_Shoshan_2022() {
    const Container_Flutter_Mohammed_Shoshan_2022 = document.querySelector(".Container_Flutter_Mohammed_Shoshan_2022");

    const Mohammed_Shoshan_2022_Flutter = document.querySelector(".Mohammed_Shoshan_2022_Flutter");

    Mohammed_Shoshan_2022_Flutter.addEventListener("click", () => {
        if (!Container_Flutter_Mohammed_Shoshan_2022.open) {
            Flutter().close();
            Container_Flutter_Mohammed_Shoshan_2022.showModal();
        }
    });

    return Container_Flutter_Mohammed_Shoshan_2022;
};

function Next_js() {
    const Container_Next_js = document.querySelector(".Container_Next_js");

    const Next_js = document.querySelector(".Next_js");

    Next_js.addEventListener("click", () => { if (!Container_Next_js.open) Container_Next_js.showModal(); });

    return Container_Next_js;
};

function Laravel() {
    const Container_Laravel = document.querySelector(".Container_Laravel");

    const Laravel = document.querySelector(".Laravel");

    Laravel.addEventListener("click", () => { if (!Container_Laravel.open) Container_Laravel.showModal(); });

    return Container_Laravel;
};

function Blend_For_Visual_Studio() {
    const Container_Blend_For_Visual_Studio = document.querySelector(".Container_Blend_For_Visual_Studio");

    const Blend_For_Visual_Studio = document.querySelector(".Blend_For_Visual_Studio");

    Blend_For_Visual_Studio.addEventListener("click", () => { if (!Container_Blend_For_Visual_Studio.open) Container_Blend_For_Visual_Studio.showModal(); });

    return Container_Blend_For_Visual_Studio;
};

function Docker() {
    const Container_Docker = document.querySelector(".Container_Docker");

    const Docker = document.querySelector(".Docker");

    Docker.addEventListener("click", () => { if (!Container_Docker.open) Container_Docker.showModal(); });

    return Container_Docker;
};

function Godot() {
    const Container_Godot = document.querySelector(".Container_Godot");

    const Godot = document.querySelector(".Godot");

    Godot.addEventListener("click", () => { if (!Container_Godot.open) Container_Godot.showModal(); });

    return Container_Godot;
};

function Unity() {
    const Container_Unity = document.querySelector(".Container_Unity");

    const Unity = document.querySelector(".Unity");

    Unity.addEventListener("click", () => { if(!Container_Unity.open) Container_Unity.showModal(); });

    return Container_Unity;
};

function Unity_Dani_Krossing_2021to2022_2022() {
    const Container_Unity_Dani_Krossing_2021_2021to2022_2022 = document.querySelector(".Container_Unity_Dani_Krossing_2021_2021to2022_2022");

    const Dani_Krossing_2021to2022_2022_Unity = document.querySelector(".Dani_Krossing_2021to2022_2022_Unity");

    Dani_Krossing_2021to2022_2022_Unity.addEventListener("click", () => {
        if (!Container_Unity_Dani_Krossing_2021_2021to2022_2022.open) {
            Unity().close();
            Container_Unity_Dani_Krossing_2021_2021to2022_2022.showModal();
        }
    });

    return Container_Unity_Dani_Krossing_2021_2021to2022_2022;
};

function Unity_Six_wrni_2020() {
    const Container_Unity_Six_wrni_2020 = document.querySelector(".Container_Unity_Six_wrni_2020");

    const Six_wrni_2020_Unity = document.querySelector(".Six_wrni_2020_Unity");

    Six_wrni_2020_Unity.addEventListener("click", () => {
        if (!Container_Unity_Six_wrni_2020.open) {
            Unity().close();
            Container_Unity_Six_wrni_2020.showModal();
        }
    });

    return Container_Unity_Six_wrni_2020;
};

function Unreal_Engine() {
    const Container_Unreal_Engine = document.querySelector(".Container_Unreal_Engine");

    const Unreal_Engine = document.querySelector(".Unreal_Engine");

    Unreal_Engine.addEventListener("click", () => { if (!Container_Unreal_Engine.open) Container_Unreal_Engine.showModal(); });

    return Container_Unreal_Engine;
};

function SwiftUI() {
    const Container_SwiftUI = document.querySelector(".Container_SwiftUI");

    const SwiftUI = document.querySelector(".SwiftUI");

    SwiftUI.addEventListener("click", () => { if (!Container_SwiftUI.open) Container_SwiftUI.showModal(); });

    return Container_SwiftUI;
};

function Android_Studio() {
    const Container_Android_Studio = document.querySelector(".Container_Android_Studio");

    const Android_Studio = document.querySelector(".Android_Studio");

    Android_Studio.addEventListener("click", () => { if (!Container_Android_Studio.open) Container_Android_Studio.showModal(); });

    return Container_Android_Studio;
};

function Jetpack_Compose() {
    const Container_Jetpack_Compose = document.querySelector(".Container_Jetpack_Compose");

    const Jetpack_Compose = document.querySelector(".Jetpack_Compose");

    Jetpack_Compose.addEventListener("click", () => { if (!Container_Jetpack_Compose.open) Container_Jetpack_Compose.showModal(); });

    return Container_Jetpack_Compose;
};

function MVVM() {
    const Container_MVVM = document.querySelector(".Container_MVVM");

    const MVVM = document.querySelector(".MVVM");

    MVVM.addEventListener("click", () => { if (!Container_MVVM.open) Container_MVVM.showModal(); });

    return Container_MVVM;
};

function MySQL() {
    const Container_MySQL = document.querySelector(".Container_MySQL");

    const MySQL = document.querySelector(".MySQL");

    MySQL.addEventListener("click", () => { if (!Container_MySQL.open) Container_MySQL.showModal(); });

    return Container_MySQL;
};

function MongoDB() {
    const Container_MongoDB = document.querySelector(".Container_MongoDB");

    const MongoDB = document.querySelector(".MongoDB");

    MongoDB.addEventListener("click", () => { if (!Container_MongoDB.open) Container_MongoDB.showModal(); });

    return Container_MongoDB;
};

function Maya() {
    const Container_Maya = document.querySelector(".Container_Maya");

    const Maya = document.querySelector(".Maya");

    Maya.addEventListener("click", () => { if (!Container_Maya.open) Container_Maya.showModal(); });

    return Container_Maya;
};

function Civil_3D() {
    const Container_Civil_3D = document.querySelector(".Container_Civil_3D");

    const Civil_3D = document.querySelector(".Civil_3D");

    Civil_3D.addEventListener("click", () => { if (!Container_Civil_3D.open) Container_Civil_3D.showModal(); });

    return Container_Civil_3D;
};

function Arduino() {
    const Container_Arduino = document.querySelector(".Container_Arduino");

    const Arduino = document.querySelector(".Arduino");

    Arduino.addEventListener("click", () => { if (!Container_Arduino.open) Container_Arduino.showModal(); });

    return Container_Arduino;
};

function Autodesk_Revit() {
    const Container_Autodesk_Revit = document.querySelector(".Container_Autodesk_Revit");

    const Autodesk_Revit = document.querySelector(".Autodesk_Revit");

    Autodesk_Revit.addEventListener("click", () => { if (!Container_Autodesk_Revit.open) Container_Autodesk_Revit.showModal(); });

    return Container_Autodesk_Revit;
};

function MATLAB() {
    const Container_MATLAB = document.querySelector(".Container_MATLAB");

    const MATLAB = document.querySelector(".MATLAB");

    MATLAB.addEventListener("click", () => { if (!Container_MATLAB.open) Container_MATLAB.showModal(); });

    return Container_MATLAB;
};

function Prokon() {
    const Container_Prokon = document.querySelector(".Container_Prokon");

    const Prokon = document.querySelector(".Prokon");

    Prokon.addEventListener("click", () => { if (!Container_Prokon.open) Container_Prokon.showModal(); });

    return Container_Prokon;
};

function Autocad() {
    const Container_Autocad = document.querySelector(".Container_Autocad");

    const Autocad = document.querySelector(".Autocad");

    Autocad.addEventListener("click", () => { if (!Container_Autocad.open) Container_Autocad.showModal(); });

    return Container_Autocad;
};

function Excel() {
    const Container_Excel = document.querySelector(".Container_Excel");

    const Excel = document.querySelector(".Excel");

    Excel.addEventListener("click", () => { if (!Container_Excel.open) Container_Excel.showModal(); });

    return Container_Excel;
};

function Word() {
    const Container_Word = document.querySelector(".Container_Word");

    const Word = document.querySelector(".Word");

    Word.addEventListener("click", () => { if (!Container_Word.open) Container_Word.showModal(); });

    return Container_Word;
};

function Power_Point() {
    const Container_Power_Point = document.querySelector(".Container_Power_Point");

    const Power_Point = document.querySelector(".Power_Point");

    Power_Point.addEventListener("click", () => { if (!Container_Power_Point.open) Container_Power_Point.showModal(); });

    return Container_Power_Point;
};

function Access() {
    const Container_Access = document.querySelector(".Container_Access");

    const Access = document.querySelector(".Access");

    Access.addEventListener("click", () => { if (!Container_Access.open) Container_Access.showModal(); });

    return Container_Access;
};

function Visio() {
    const Container_Visio = document.querySelector(".Container_Visio");

    const Visio = document.querySelector(".Visio");

    Visio.addEventListener("click", () => { if (!Container_Visio.open) Container_Visio.showModal(); });

    return Container_Visio;
};

function Publish() {
    const Container_Publish = document.querySelector(".Container_Publish");

    const Publish = document.querySelector(".Publish");

    Publish.addEventListener("click", () => { if (!Container_Publish.open) Container_Publish.showModal(); });

    return Container_Publish;
};

function Adobe_Ps() {
    const Container_Adobe_Ps = document.querySelector(".Container_Adobe_Ps");

    const Adobe_Ps = document.querySelector(".Adobe_Ps");

    Adobe_Ps.addEventListener("click", () => { if (!Container_Adobe_Ps.open) Container_Adobe_Ps.showModal(); });

    return Container_Adobe_Ps;
};

function Adobe_Ps_Nour_Design_2020_2020to2022() {
    const Container_Adobe_Ps_Nour_Design_2020_2020to2022 = document.querySelector(".Container_Adobe_Ps_Nour_Design_2020_2020to2022");

    const Nour_Design_2020_2020to2022_Adobe_Ps = document.querySelector(".Nour_Design_2020_2020to2022_Adobe_Ps");

    Nour_Design_2020_2020to2022_Adobe_Ps.addEventListener("click", () => {
        if (!Container_Adobe_Ps_Nour_Design_2020_2020to2022.open) {
            Adobe_Ps().close();
            Container_Adobe_Ps_Nour_Design_2020_2020to2022.showModal();
        }
    });

    return Container_Adobe_Ps_Nour_Design_2020_2020to2022;
};

function Adobe_Ps_Amr_Atallah_2017to2020_2018to2022() {
    const Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022 = document.querySelector(".Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022");

    const Amr_Atallah_2017to2020_2018to2022_Adobe_Ps = document.querySelector(".Amr_Atallah_2017to2020_2018to2022_Adobe_Ps");

    Amr_Atallah_2017to2020_2018to2022_Adobe_Ps.addEventListener("click", () => {
        if (!Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022.open) {
            Adobe_Ps().close();
            Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022.showModal();
        }
    });

    return Container_Adobe_Ps_Amr_Atallah_2017to2020_2018to2022;
};

function Adobe_Ai() {
    const Container_Adobe_Ai = document.querySelector(".Container_Adobe_Ai");

    const Adobe_Ai = document.querySelector(".Adobe_Ai");

    Adobe_Ai.addEventListener("click", () => { if (!Container_Adobe_Ai.open) Container_Adobe_Ai.showModal(); });

    return Container_Adobe_Ai;
};

function Adobe_Pr() {
    const Container_Adobe_Pr = document.querySelector(".Container_Adobe_Pr");

    const Adobe_Pr = document.querySelector(".Adobe_Pr");

    Adobe_Pr.addEventListener("click", () => { if (!Container_Adobe_Pr.open) Container_Adobe_Pr.showModal(); });

    return Container_Adobe_Pr;
};

function Adobe_Xd() {
    const Container_Adobe_Xd = document.querySelector(".Container_Adobe_Xd");

    const Adobe_Xd = document.querySelector(".Adobe_Xd");

    Adobe_Xd.addEventListener("click", () => { if (!Container_Adobe_Xd.open) Container_Adobe_Xd.showModal(); });

    return Container_Adobe_Xd;
};

function Adobe_Ae() {
    const Container_Adobe_Ae = document.querySelector(".Container_Adobe_Ae");

    const Adobe_Ae = document.querySelector(".Adobe_Ae");

    Adobe_Ae.addEventListener("click", () => { if (!Container_Adobe_Ae.open) Container_Adobe_Ae.showModal(); });

    return Container_Adobe_Ae;
};

function Adobe_Mu() {
    const Container_Adobe_Mu = document.querySelector(".Container_Adobe_Mu");

    const Adobe_Mu = document.querySelector(".Adobe_Mu");

    Adobe_Mu.addEventListener("click", () => { if (!Container_Adobe_Mu.open) Container_Adobe_Mu.showModal(); });

    return Container_Adobe_Mu;
};

function Exit() {
    const Exit = document.querySelectorAll(".Exit");

    Exit.forEach((eo) => {
        eo.addEventListener("click", () => {
            HTML().close();
            css().close();
            JavaScript().close();
            C().close();
            Cpp().close();
            Cpp_BK_Programmer_2017_2017_2018_2018to2019().close();
            Cpp_Mohamed_Eldesoky_2013_2019_2022().close();
            Cpp_Adel_Nasim_2017().close();
            Cpp_Mohammed_Shoshan_2017().close();
            Cs().close();
            Cs_Codographia_2022_2023().close();
            Cs_Mohammed_Shoshan_2020_2020to2021().close();
            PHP().close();
            Python().close();
            Python_Mohammed_Shoshan_2017_2017_2017_2018().close();
            TypeScript().close();
            Git().close();
            SASS().close();
            Canvas().close();
            AJAX().close();
            JSON().close();
            Vue_js().close();
            PugJs().close();
            Gulp().close();
            jQuery().close();
            // Node_js().close();
            Bootstrap().close();
            UML().close();
            Dart().close();
            Fs().close();
            Ruby().close();
            Pascal().close();
            Scala().close();
            Java().close();
            Java_Mohammed_Shoshan_2017_2017_2017_2018().close();
            Kotlin().close();
            React().close();
            PyTorch().close();
            Django().close();
            Django_Mohammed_Shoshan_2018to2019_2019().close();
            Ring().close();
            Crystal_Report().close();
            ASP_NET_Core().close();
            Visual_Basic().close();
            CS50().close();
            Clean_Code().close();
            Command_Lines().close();

            WordPress().close();
            Larp().close();
            Xamarin().close();
            MAUI().close();
            Flutter().close();
            Flutter_Mohammed_Shoshan_2022().close();
            Next_js().close();
            Laravel().close();
            Blend_For_Visual_Studio().close();
            Docker().close();
            Godot().close();
            Unity().close();
            Unity_Dani_Krossing_2021to2022_2022().close();
            Unity_Six_wrni_2020().close();
            Unreal_Engine().close();
            SwiftUI().close();
            Android_Studio().close();
            Jetpack_Compose().close();
            MVVM().close();
            MySQL().close();
            MongoDB().close();

            Maya().close();
            MATLAB().close();
            Prokon().close();
            Autocad().close();
            Civil_3D().close();
            Arduino().close();
            Autodesk_Revit().close();

            Excel().close();
            Word().close();
            Power_Point().close();
            Access().close();
            Visio().close();
            Publish().close();

            Adobe_Ps().close();
            Adobe_Ps_Nour_Design_2020_2020to2022().close();
            Adobe_Ps_Amr_Atallah_2017to2020_2018to2022().close();
            Adobe_Ai().close();
            Adobe_Pr().close();
            Adobe_Xd().close();
            Adobe_Ae().close();
            Adobe_Mu().close();
        });
    });
};

function Cpp_Back() {
    const Container_Title_Cpp_Back = document.querySelectorAll(".Container_Title_Cpp_Back");

    Container_Title_Cpp_Back.forEach((eo) => {
        eo.addEventListener("click", () => {
            Cpp().showModal();
            Cpp_BK_Programmer_2017_2017_2018_2018to2019().close();
            Cpp_Mohamed_Eldesoky_2013_2019_2022().close();
            Cpp_Adel_Nasim_2017().close();
            Cpp_Mohammed_Shoshan_2017().close();
        });
    });
};

function Cs_Back() {
    const Container_Title_Cs_Back = document.querySelectorAll(".Container_Title_Cs_Back");

    Container_Title_Cs_Back.forEach((eo) => {
        eo.addEventListener("click", () => {
            Cs().showModal();
            Cs_Codographia_2022_2023().close();
            Cs_Mohammed_Shoshan_2020_2020to2021().close();
        });
    });
};

function Python_Back() {
    const Container_Title_Python_Back = document.querySelector(".Container_Title_Python_Back");

    Container_Title_Python_Back.addEventListener("click", () => {
        Python().showModal();
        Python_Mohammed_Shoshan_2017_2017_2017_2018().close();
    });
};

function Java_Back() {
    const Container_Title_Java_Back = document.querySelector(".Container_Title_Java_Back");

    Container_Title_Java_Back.addEventListener("click", () => {
        Java().showModal();
        Java_Mohammed_Shoshan_2017_2017_2017_2018().close();
    });
};

function Django_Back() {
    const Container_Title_Django_Back = document.querySelector(".Container_Title_Django_Back");

    Container_Title_Django_Back.addEventListener("click", () => {
        Django().showModal();
        Django_Mohammed_Shoshan_2018to2019_2019().close();
    });
};

function Flutter_Back() {
    const Container_Title_Flutter_Back = document.querySelector(".Container_Title_Flutter_Back");

    Container_Title_Flutter_Back.addEventListener("click", () => {
        Flutter().showModal();
        Flutter_Mohammed_Shoshan_2022().close();
    });
};

function Unity_Back() {
    const Container_Title_Unity_Back = document.querySelectorAll(".Container_Title_Unity_Back");

    Container_Title_Unity_Back.forEach((eo) => {
        eo.addEventListener("click", () => {
            Unity().showModal();
            Unity_Dani_Krossing_2021to2022_2022().close();
            Unity_Six_wrni_2020().close();
        });
    });
};

function Adobe_Ps_Back() {
    const Container_Title_Adobe_Ps_Back = document.querySelectorAll(".Container_Title_Adobe_Ps_Back");

    Container_Title_Adobe_Ps_Back.forEach((eo) => {
        eo.addEventListener("click", () => {
            Adobe_Ps().showModal();
            Adobe_Ps_Nour_Design_2020_2020to2022().close();
            Adobe_Ps_Amr_Atallah_2017to2020_2018to2022().close();
        });
    });
};