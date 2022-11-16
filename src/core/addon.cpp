#include "addon.h"

NAN_MODULE_INIT(InitAddon)
{
    v8::Local<v8::FunctionTemplate> hello = Nan::New<v8::FunctionTemplate>(Hello::HelloMessage);
    hello->SetClassName(Nan::New("HelloNative").ToLocalChecked());

    Nan::SetPrototypeMethod(hello, "$hello", Hello::HelloMessage);
}

NODE_MODULE(addon, InitAddon)
