#include "addon.h"

Hello::Hello() : Nan::ObjectWrap()
{
    TRACE("Hello::Constructor");
}

NAN_METHOD(Hello::HelloMessage)
{
    TRACE("Hello::HelloMessage");
    Hello *self = NODE_THIS();
    if (info.Length() < 1 || !info[0]->IsString())
    {
        Nan::ThrowTypeError("First argument must be a string");
        return;
    }
}
