#ifndef NODE_CPP_NPM_PACKAGE_BOILERPLATE__HELLO_ADDON
#define NODE_CPP_NPM_PACKAGE_BOILERPLATE__HELLO_ADDON

#include <nan.h>

class Hello : public Nan::ObjectWrap
{
public:
    static NAN_METHOD(HelloMessage);
};

#endif
