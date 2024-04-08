Java.choose("com.example.frida", 
    {
        onMatch: function (intent) 
        {
            console.log('Intento: ', intent)
            // Invocar un method => intent.getValueExampleSecret()
        },
        onComplete:function ()
        {
            console.log('Completo.')
        }
    })
