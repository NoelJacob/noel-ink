ALTER TABLE `client` MODIFY COLUMN `id` varchar(36) NOT NULL;--> statement-breakpoint
ALTER TABLE `client` MODIFY COLUMN `os_cpu` text;--> statement-breakpoint
ALTER TABLE `ip` MODIFY COLUMN `id` varchar(36) NOT NULL;