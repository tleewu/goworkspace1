# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Workspace.create!({name: 'Koala Tea', lat: 34.062492, lng: -118.447672, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Bean Bag', lat: 37.775010, lng: -122.437842, overall: 4,
                   wifi: 4, power: 4, seating: 2, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Starbucks', lat: 39.276736, lng: -76.830851, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "08:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
Workspace.create!({name: 'Starbucks', lat: 34.062478, lng: -118.447450, overall: 4,
                   wifi: 4, power: 4, seating: 3, weekday_opening: "21:00:00", weekday_closing:
                  "22:00:00", weekend_opening: "08:00:00", weekend_closing: "22:00:00"})
