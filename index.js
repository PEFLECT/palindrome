let str = a("LooL")

str

function a (str) {
    str = str.toLowerCase()
    a = str.length
    b = Math.floor(a/2)
    for( var i = 0 ; i < b; i++ ){
        if (str[i] !== str[a-1 -i]){
            return false
        }
    }
    return true
}
