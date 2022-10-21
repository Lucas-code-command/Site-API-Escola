var fs = require('fs')
                    var convertXMLtoJSON = require('xmljs')
                    convertXMLtoJSON.parseFromString(drivers,function(results){
                        fs.writeFile('XMLtoJSON.json',JSON.stringify(results))
                    })