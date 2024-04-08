const v1 = 1;
const v2 = 0;
const v3 = 1;
Module.enumerateExports("ARCHIVO.so", {
        onMatch: function(e) {
            if (e.type == 'function') {
                if (e.name.includes("FUNCION1") || e.name.includes("FUNCION2") ||
                    e.name.includes("FUNCION3")) 
                {
                    if (v1 && e.name.includes("FUNCION1"))
                    {
                        console.log("Parcheando funcion:", e.name);
                        Interceptor.replace(e.address, new NativeCallback(function() {
                            return 99999702222821223983291821113231232113213131233299999133213213213352.37;
                            // return 12.37;
                        }, "double", []));
                    }
                    else if (v2 && e.name.includes("FUNCION2")) 
                    {
                        console.log("Parcheando funcion:", e.name);
                        Interceptor.replace(e.address, new NativeCallback(function() {
                            return 99999702222821223983291821113231232113213131233299999133213213213352.37;
                            // return 12.37;
                        }, "double", []));
                    }
                    else if (v3 && e.name.includes("FUNCION3")) 
                    {
                        console.log("Parcheando funcion:", e.name);
                        Interceptor.replace(e.address, new NativeCallback(function() {
                            return 99999702222821223983291821113231232113213131233299999133213213213352.37;
                            // return 12.37;
                        }, "double", []));
                    }
                }
            }
        },
        onComplete: function() {}
    });
