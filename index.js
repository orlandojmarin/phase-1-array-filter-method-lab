
//FIND MATCHING FUNCTION
function findMatching(driverNames, string) {
    return driverNames.filter( (driverName) => {
        return driverName.toLowerCase() == string.toLowerCase()
    });
}

//FUZZY MATCH FUNCTION
function fuzzyMatch(driverNames, name) {
    return driverNames.filter( (driver) => {
        return driver[0] == name[0]
    })
}

//MATCH NAME FUNCTION
function matchName(driverObjects, string) {
    return driverObjects.filter( (object) => {
        return object.name == string
    })
}