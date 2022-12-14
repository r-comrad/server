
#define CROW_STATIC_DIRECTORY "resourse/"
#define CROW_STATIC_ENDPOINT  "/sus/<path>"

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
        .headers("X-Custom-Header", "Upgrade-Insecure-Requests")
        .methods("POST"_method, "GET"_method)
      .prefix("/cors")
        .origin("example.com")
      .prefix("/nocors")
        .ignore();

    CROW_ROUTE(app, "/sas")
    ([](const crow::request&, crow::response& res) {
        //replace cat.jpg with your file path
        res.set_static_file_info("resourse/1.jpg");
        res.end();
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

            crow::json::wvalue res;
            res["id"]       = num;
            res["name"]     = "SUS_CLASS";
            res["students"] = crow::json::wvalue::list({student1, student2});

            return res;
        });

    CROW_ROUTE(app, "/plan/<int>")
    (
        [](int num)
        {
            if (num != 1) num = 1;

            crow::json::wvalue lessons1;
            lessons1["id"]   = 1;
            lessons1["name"] = "Revolution.101";
            lessons1["date"] = "01-10-1917";

            crow::json::wvalue lessons2;
            lessons2["id"]   = 2;
            lessons2["name"] = "Why we IVAN?";
            lessons2["date"] = "02-10-1917";

            crow::json::wvalue res;
            res["id"]      = 1;
            res["name"]    = "Why tcar suck";
            res["lessons"] = crow::json::wvalue::list({lessons1, lessons2});

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

    app.port(80).multithreaded().run();
}
