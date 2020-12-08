#include <napi.h>

#include "QTextToSpeech/qtexttospeech_wrap.h"

Napi::Object Main(Napi::Env env, Napi::Object exports) {
  QTextToSpeechtWrap::init(env, exports);
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Main)
