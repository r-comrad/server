cmake_minimum_required(VERSION 3.15)
project(Server VERSION 1.2)

add_executable(${PROJECT_NAME} source/main.cpp source/domain/path.cpp  source/domain/path.hpp)

set(CROW_FEATURES ssl)

if (MSVC_VERSION GREATER_EQUAL "1900")
target_compile_definitions(${PROJECT_NAME} PRIVATE WIND)
target_include_directories(${PROJECT_NAME} PUBLIC D:/lib/vcpkg/installed/x64-windows/include)
target_link_libraries(${PROJECT_NAME} PUBLIC D:/lib/vcpkg/installed/x64-windows/lib)
else()
target_compile_definitions(${PROJECT_NAME} PRIVATE LINX)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -pthread -Wl,--no-as-needed -ldl")
target_include_directories(${PROJECT_NAME} PUBLIC ~/lib/vcpkg/installed/x64-linux/include)
target_link_libraries(${PROJECT_NAME} PUBLIC "/home/rcomrad/lib/vcpkg/installed/x64-linux/lib")
endif()
# target_link_libraries(helloworld PUBLIC Crow::Crow)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin)
set_target_properties(${PROJECT_NAME} PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin/$<0:>)
set_target_properties(${PROJECT_NAME} PROPERTIES OUTPUT_NAME ${PROJECT_NAME})
set_target_properties(${PROJECT_NAME} PROPERTIES SUFFIX .exe)