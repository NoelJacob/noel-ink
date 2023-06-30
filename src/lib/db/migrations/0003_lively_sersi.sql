ALTER TABLE `client` RENAME COLUMN `id` TO `db_id`;--> statement-breakpoint
ALTER TABLE `ip` RENAME COLUMN `id` TO `db_id`;--> statement-breakpoint
ALTER TABLE `client` MODIFY COLUMN `db_id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `ip` MODIFY COLUMN `db_id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `client` ADD `timestamp` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `client` ADD `cookie_id` varchar(36);--> statement-breakpoint
ALTER TABLE `client` ADD `load_id` varchar(36);--> statement-breakpoint
ALTER TABLE `client` ADD `fingerprint` text;--> statement-breakpoint
ALTER TABLE `ip` ADD `timestamp` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `ip` ADD `cookie_id` varchar(36);--> statement-breakpoint
ALTER TABLE `ip` ADD `load_id` varchar(36);