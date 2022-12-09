let User = "Mariaa"
let Password = "2244"
let Result_User 
let Result_Pass

let Valid_user = prompt ("Ingresa el Nombre de usuario")
do {
    if (Valid_user !== User)
    ( 
    Valid_user = prompt ("Nombre de usuario incorrecto, intenta de nuevo")
    )
    else (
         Valid_user = Result_User 
    )
} while (Valid_user !== Result_User)

let Valid_pass = prompt ("Ingresa la Contraseña")
do {
    if (Valid_pass !== Password)
    ( 
    Valid_pass = prompt ("Contraseña incorrecta, intenta de nuevo")
    )
    else (
         Valid_pass = Result_Pass 
    )
} while (Valid_pass !== Result_Pass)