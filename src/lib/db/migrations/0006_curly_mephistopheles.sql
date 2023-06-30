CREATE TABLE `page` (
	`db_id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`timestamp` timestamp DEFAULT (now()),
	`cookie_id` varchar(36),
	`load_id` varchar(36),
	`link` text,
	`time` text);
