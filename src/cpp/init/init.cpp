#include <napi.h>

#include <QTextToSpeech>

Napi::Object Main(Napi::Env env, Napi::Object exports) { return exports; }

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Main)
