-- MySQL Script generated by MySQL Workbench
-- Sun Sep 15 13:27:50 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Class4Project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Class4Project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Class4Project` DEFAULT CHARACTER SET utf8 ;
USE `Class4Project` ;

-- -----------------------------------------------------
-- Table `Class4Project`.`Messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `class4project`.`messages` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `body` TEXT NULL,
  `submission_date` DATETIME NULL,
  `license_plate` VARCHAR(10) NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
