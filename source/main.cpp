
// #if defined(LINX)
// #    define CROW_STATIC_DIRECTORY "/home/rcomrad/server/bin/resourse/"
// #elif defined(WIND)
// #    define CROW_STATIC_DIRECTORY "resourse/"
// #endif
// #define CROW_STATIC_ENDPOINT "/sus/<path>"
#include "domain/path.hpp"

#include "crow/middlewares/cors.h"

#include "crow.h"

int
main()
{
    // Enable CORS
    crow::App<crow::CORSHandler> app;

    // Customize CORS
    auto& cors = app.get_middleware<crow::CORSHandler>();
    app.loglevel(crow::LogLevel::Debug);
    // clang-format off
    cors
      .global()
        .headers("*")
        .methods("POST"_method, "GET"_method)
      .prefix("/cors")
        .origin("*")
      .prefix("/nocors")
        .ignore();

    CROW_ROUTE(app, "/sas")
    ([](const crow::request&, crow::response& res) {
        //replace cat.jpg with your file path
        res.set_static_file_info("1.jpg");
        res.end();
    });

    CROW_ROUTE(app, "/pwd")
    ([]() {
        return dom::Path::getExecutablePath();
    });

    CROW_ROUTE(app, "/auntificationChecker")
    ([]() {
        return dom::Path::getExecutablePath();
    });

    CROW_ROUTE(app, "/html")
    ([]() {
        return crow::mustache::load("site.html").render();
    });

    CROW_ROUTE(app, "/")
    ([]() {
        return crow::mustache::load("core.html").render();
    });

    CROW_ROUTE(app, "/grade/<int>")
    (
        [](int num)
        {
            if (num != 1) num = 1;

            crow::json::wvalue student1;
            student1["id"]      = 1;
            student1["name"]    = "SUS_NAME";
            student1["surname"] = "SUS_SURNAME";

            crow::json::wvalue student2;
            student2["id"]      = 2;
            student2["name"]    = "SUS_MEGANAME";
            student2["surname"] = "SUS_MEGASURNAME";

            crow::json::wvalue student3;
            student3["id"]      = 3;
            student3["name"]    = "Zahrebelhaya";
            student3["surname"] = "22";

            crow::json::wvalue student4;
            student4["id"]      = 4;
            student4["name"]    = "Shiz";
            student4["surname"] = "Borisovich";

            crow::json::wvalue student5;
            student5["id"]      = 5;
            student5["name"]    = "Putin";
            student5["surname"] = "VVP";

            crow::json::wvalue student6;
            student6["id"]      = 6;
            student6["name"]    = "ITMO-Students";
            student6["surname"] = "Passive";

            crow::json::wvalue res;
            res["id"]       = num;
            res["name"]     = "SUS_CLASS";
            res["students"] = crow::json::wvalue::list({student1, student2, student3, student4, student5, student6});

            return res;
        });

    CROW_ROUTE(app, "/plan/<int>")
    (
        [](int num)
        {
            if (num != 1) num = 1;

            crow::json::wvalue res;
            res["id"]      = 1;
            res["name"]    = "Why tcar suck";

            crow::json::wvalue lessons1;
            lessons1["id"]   = 1;
            lessons1["name"] = "Revolution.101";
            lessons1["date"] = "01-10-1917";

            crow::json::wvalue lessons2;
            lessons2["id"]   = 2;
            lessons2["name"] = "Why we IVAN?";
            lessons2["date"] = "02-10-1917";

            crow::json::wvalue lessons3;
            lessons3["id"]   = 3;
            lessons3["name"] = "Why we suck?";
            lessons3["date"] = "02-11-1917";

            crow::json::wvalue lessons4;
            lessons4["id"]   = 4;
            lessons4["name"] = "Why we fuck?";
            lessons4["date"] = "02-12-1917";
            
            crow::json::wvalue lessons5;
            lessons5["id"]   = 5;
            lessons5["name"] = "Why we love ITMO University?";
            lessons5["date"] = "12-01-1918";

            crow::json::wvalue lessons6;
            lessons6["id"]   = 6;
            lessons6["name"] = "Kurs Zahrebelnoy";
            lessons6["date"] = "17-01-1918";

            crow::json::wvalue lessons7;
            lessons7["id"]   = 7;
            lessons7["name"] = "USSR 3.0";
            lessons7["date"] = "27-01-1918";

            res["lessons"] = crow::json::wvalue::list({lessons1, lessons2, lessons3, lessons4, lessons5, lessons6, lessons7});

            return res;
        });

    CROW_ROUTE(app, "/mark/<int>")
    (
        [](int num)
        {
            if (num != 1) num = 1;

            crow::json::wvalue mark1;
            mark1["id"]      = 1;
            mark1["student"] = 1;
            mark1["lesson"]  = 1;
            mark1["value"]   = "2.3";

            crow::json::wvalue mark2;
            mark2["id"]      = 2;
            mark2["student"] = 2;
            mark2["lesson"]  = 2;
            mark2["value"]   = "4";

            crow::json::wvalue res;
            res["marks"] = crow::json::wvalue::list({mark1, mark2});
            return res;
        });

    CROW_ROUTE(app, "/mark/single/<int>/<int>")
    (
        [](int aStudentId, int aLessonId)
        {
            crow::json::wvalue mark;
            mark["id"]      = 1;
            mark["student"] = 1;
            mark["lesson"]  = 1;
            mark["value"]   = "2.3";
            return mark;
        });

    CROW_ROUTE(app, "/subjects")
    (
    []()
    {
        crow::json::wvalue subject1;
        subject1["id"]  = 1;
        subject1["name"]    = "Dildo";
        subject1["plan"]  = 1;
        subject1["grade"]   = 1;

        crow::json::wvalue res;
        res["subjects"] = crow::json::wvalue::list({subject1});
        return res;
    });



       CROW_ROUTE(app, "/login")
      .methods("POST"_method)([](const crow::request& req) {
          auto x = crow::json::load(req.body);
          if (!x)
              return crow::response(400);

              std::cout << std::endl << std::endl;
std::cout << "------------------------->>>>>";
std::cout << x["login"]  << " " <<  x["password"];
std::cout << std::endl;
// for(auto& i : x)
// {
//     std::cout << i.key << " " << i.;
// }
std::cout << std::endl << std::endl;

            if (x["login"] != "sasiska" || x["password"] != "123")
                {
                    auto res = crow::response(crow::json::wvalue{req.body});
                    res.add_header("Access-Control-Allow-Origin", "*");
                    res.add_header("Access-Control-Allow-Headers", "content-type");

                    return res;
                }

        crow::json::wvalue j = {"OK"};
        auto res = crow::response{j};
        res.add_header("Access-Control-Allow-Origin", "*");
        res.add_header("Access-Control-Allow-Headers", "content-type");




          return res;
      });

    app.port(80).multithreaded().run();
}
