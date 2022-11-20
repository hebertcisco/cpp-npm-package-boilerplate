#include <napi.h>

Napi::String hello(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    Napi::String name = info[0].As<Napi::String>();
    return Napi::String::New(env, "Hello " + name.Utf8Value());
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, hello));
    return exports;
}

NODE_API_MODULE(hello, Init)