CREATE TABLE `Ducks` (
  `duckID` int NOT NULL AUTO_INCREMENT,
  `feedingTime` date NOT NULL,
  `foodType` varchar(100) NOT NULL,
  `duckLocation` varchar(45) NOT NULL,
  `numOfDucks` int NOT NULL,
  `foodQty` varchar(45) NOT NULL,
  PRIMARY KEY (`duckID`),
  UNIQUE KEY `duckID_UNIQUE` (`duckID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci