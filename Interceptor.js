    Interceptor.attach(ADDRESStoHOOK, {
        onLeave: function(v1)
        {
          //Diversas formas de reemplazar el valor
            v1.replace(70600)
            v1.writeInt(70600)
            v1.replace(0x0)
            v1.writeS32(-70211)
            v1.writeLong(3921382131232)
        }
