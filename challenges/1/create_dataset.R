library(Lahman)
library(dplyr)

data(AllstarFull)
data(Batting)
data(Pitching)
data(Fielding)


# Get each player's primary fielding position
field = select(filter(group_by(Fielding, playerID, yearID), rank(desc(G)) == 1 & G > 10 & POS != "P"), playerID, yearID, POS)

# Now join the raw batting stats with the fielder's position
bat = inner_join(x = Batting, y = field)

# Finally, note if the player was an all-star that year
bat = left_join(x = bat, y = select(mutate(AllstarFull, AS = TRUE), playerID, yearID, AS))
bat$AS[is.na(bat$AS)] = FALSE


pitch = left_join(x = Pitching, y = select(mutate(AllstarFull, AS = TRUE), playerID, yearID, AS))
pitch$AS[is.na(pitch$AS)] = FALSE

# Output
write.table(bat, "batting.csv", sep=",", row.names=FALSE)
write.table(pitch, "pitching.csv", sep=",", row.names=FALSE)
