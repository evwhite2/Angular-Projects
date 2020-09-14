USE media_watch_list;

CREATE TABLE `watchlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `medium` varchar(45) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  `plot` varchar(1000) DEFAULT NULL,
  `poster` varchar(3000) DEFAULT NULL,
  `is_favorite` tinyint(4) NOT NULL DEFAULT '0',
  `rating` decimal(10,2) DEFAULT NULL,
  `user_id` varchar(45) NOT NULL,
  `views` int(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO watchlist(title, medium, genre, year, plot, poster, rating, user_id, views)
VALUES ("Avatar", "movie", "Science Fiction, Fantasy", 2009, "To Pandora and save the world for the Na'Vi", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g", 9.5, 1, 100000),
("Avatar: the Last Air Bender", "series", "Fantasy, Anime", 2005, "Plot of last air bender", "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar_The_Last_Airbender_The_Promise_Part_1_cover.jpg/230px-Avatar_The_Last_Airbender_The_Promise_Part_1_cover.jpg", 8, 1, 32423);