-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: signin
-- ------------------------------------------------------
-- Server version	5.5.59

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class_sign`
--

DROP TABLE IF EXISTS `class_sign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class_sign` (
  `id` varchar(45) NOT NULL,
  `student_id` varchar(40) NOT NULL,
  `course_id` varchar(45) NOT NULL,
  `issign` int(11) NOT NULL,
  `start_date` varchar(12) NOT NULL,
  `end_date` varchar(12) NOT NULL,
  `sign_number` int(11) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_sign`
--

LOCK TABLES `class_sign` WRITE;
/*!40000 ALTER TABLE `class_sign` DISABLE KEYS */;
INSERT INTO `class_sign` VALUES ('036599fc-0363-4def-a083-80ba48c730ec','444','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271713','201812271713',1234,'118.77013','32.06639'),('04debdca-cb5b-4fa5-b95f-067f3ff01982','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262057','201812262057',1222,'118.77013','32.06639'),('056105fa-cf65-42f6-955b-02884ea8a14e','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262047','201912310000',1221,'118.77013','32.06639'),('0711e2d0-d6f8-4ce2-a898-6cbf6986521b','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262207','201812262208',0,'118.77013','32.06639'),('0775b420-0b1b-450a-b87e-a94c669e0a86','444','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271924','201812271925',1234,'118.90907','32.09636'),('085e8083-b003-422f-a955-26e2a88c5c45','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261713','201812262026',1123,'118.77013','32.06639'),('0d9709e6-580c-41fc-82ec-b8284b95eb38','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262109','201812262109',1111,'118.77013','32.06639'),('0fc5f444-18d3-4138-8072-6c355875ee4a','555','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271713','201812271713',1234,'118.77013','32.06639'),('14aa2b08-9dd4-44f3-a7b6-03f883833a8a','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262042','201912310000',1234,'118.77013','32.06639'),('1deeee38-891a-4c4b-bf30-9dc713347654','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271924','201812271925',1234,'118.90907','32.09636'),('27e08baa-1cc0-47bf-b50e-5efc0765df42','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262206','201812262206',1231,'118.77013','32.06639'),('34ec7d05-604f-45ad-8a0f-f98eaebe6f15','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262225','201812262225',1211,'118.77013','32.06639'),('355a4fb8-ac28-47c3-bfc8-84f402e37ff5','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262050','201812262052',1234,'118.77013','32.06639'),('35cddc9f-640f-42ea-b3e7-e54505e1f58c','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271713','201812271713',1234,'118.77013','32.06639'),('372202d7-f985-46ae-b992-44e6b6310f1c','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262109','201812262109',1111,'118.77013','32.06639'),('39197284-4e31-4cf7-806a-0d64b3892089','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262202','201812262202',1111,'118.77013','32.06639'),('461e2f7d-dffa-4b07-bd71-41425f394703','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262225','201812262225',1111,'118.77013','32.06639'),('51e9643e-9cfa-4030-82f0-f83726552d2f','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262207','201812262208',0,'118.77013','32.06639'),('53623b12-426e-4675-825c-09b19600b647','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262050','201812262052',1111,'118.77013','32.06639'),('5777e3ee-f6f5-4ed6-ba50-9fbc7ceb0151','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262037','201912310000',1234,'118.77013','32.06639'),('5d62e14a-6ac3-49f0-9712-c83369474d6a','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262027','201912310000',1234,'118.77013','32.06639'),('677f4805-24f8-4da4-87b8-4ce937c5f3e3','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262046','201912310000',1234,'118.77013','32.06639'),('67a30375-9ebe-423d-b5bc-c21ede37b00e','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261932','201912310000',1234,'118.77013','32.06639'),('67b95a78-c837-445f-8df5-27dc476f6923','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261935','201912310000',1111,'118.77013','32.06639'),('695c7e74-4b6c-423f-87e8-463108674cc8','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262208','201812262208',0,'118.77013','32.06639'),('6beb8a3b-b590-4427-9d6f-41973727b723','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',1,'201812261722','201912310000',1234,'118.77013','32.06639'),('6d162c46-e31b-4dac-817d-276cc36a48b3','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261710','201912310000',1234,'118.77013','32.06639'),('6dcf6d21-1e71-4dcb-8fa5-66a928ed2e8b','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262027','201912310000',1234,'118.77013','32.06639'),('6df0da3d-3c24-464f-afeb-cf490502ae23','222','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271713','201812271713',1234,'118.77013','32.06639'),('70e1a144-b7e2-49e2-bebc-b11fd808b3d5','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262222','201812262222',1111,'118.77013','32.06639'),('73db892c-5a4c-4818-8893-8a6ebf4935c8','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262207','201812262208',0,'118.77013','32.06639'),('75e6787a-2612-4bf4-9caf-bdb07674a666','111','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271924','201812271925',1234,'118.90907','32.09636'),('78061eb5-88be-41fd-acb4-ce10b1db069a','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261944','201912310000',1111,'118.77013','32.06639'),('7a5ef479-77ec-4a48-b4b0-e8810e161d4e','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262058','201812262059',1111,'118.77013','32.06639'),('8d176991-f863-4ec7-b4ee-ae90ff2a4156','555','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271924','201812271925',1234,'118.90907','32.09636'),('8e342af9-6188-4741-b78f-69871a7b7c1d','MF1832123','da6fd840-1671-46fe-9a02-2087a2938d0b',0,'201812262200','201812262201',1234,'118.77013','32.06639'),('91b02438-a99e-4585-91d8-4e8761fa07d8','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262228','201812262228',1111,'118.77013','32.06639'),('94c4dc2d-240f-485c-89d6-4d676130b9b5','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261931','201912310000',1234,'118.77013','32.06639'),('99f3f39c-ea99-4fdd-8e6b-ae4fff350786','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262101','201812262102',1111,'118.77013','32.06639'),('9ae34cef-4741-4678-8b26-d2af213d7fa2','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261941','201912310000',1234,'118.77013','32.06639'),('9e2687e3-ecf1-42dd-85bb-ded1d5130652','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262205','201812262205',0,'118.77013','32.06639'),('9f07cfab-db69-4718-b2a9-45167b4e0e58','333','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271924','201812271925',1234,'118.90907','32.09636'),('a7dd4b6d-b890-4d23-bc89-87dc80875fee','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262040','201912310000',1234,'118.77013','32.06639'),('af363eaa-d5d1-498b-a1e7-2e4ce7b45ba4','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812261720','201912310000',1231,'118.77013','32.06639'),('b838fdd7-75a3-467c-b949-bb808d0fc557','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262038','201912310000',1234,'118.77013','32.06639'),('b8711ba8-8f0b-4727-aafb-58b2e4a670e2','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271641','201812271642',1234,'118.77013','32.06639'),('c0995861-b1f8-419f-b089-9ac7b5e9f9c4','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262035','201912310000',1234,'118.77013','32.06639'),('c3c0e697-4592-4e3b-b50e-bce744f0da3a','333','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271713','201812271713',1234,'118.77013','32.06639'),('cc60806c-5138-4616-88d2-d54d5bfbf0ea','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262048','201912310000',1234,'118.77013','32.06639'),('cd64c920-39e1-4b56-be15-657b018de820','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262108','201812262108',1222,'118.77013','32.06639'),('e32e000d-95ec-4ee4-aa8b-816744907074','111','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271713','201812271713',1234,'118.77013','32.06639'),('ef29d8d4-dc0b-40e7-afb9-a95d2720cb60','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262014','201912310000',1234,'118.77013','32.06639'),('f1f992f5-937f-46e3-a767-3669cee76900','222','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812271924','201812271925',1234,'118.90907','32.09636'),('f5433489-5b1f-4264-9b7a-50a91ef096ef','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb',0,'201812262226','201812262226',1111,'118.77013','32.06639');
/*!40000 ALTER TABLE `class_sign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` varchar(45) NOT NULL,
  `student_id` varchar(45) NOT NULL,
  `content` varchar(255) NOT NULL,
  `date` varchar(45) NOT NULL,
  `course_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES ('0bfb0852-e868-4072-9364-348f879f8898','MF1832123','sss','20181226','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('1','111','test comment1','20181209','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('2','222','test comment2','20181224','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('4de1657d-ee3c-4a4a-bd14-2b9e710fb595','MF1832123','1234','20181227','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('6b7e3adf-4fb1-48b2-b543-c55746fe030f','MF1832123','1234','20181227','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('821f87e3-5cfc-4fbe-bed7-0f688b4e7bfc','MF1832123','sss','20181226','2111514a-e79a-4da7-9742-6f3dba0fccfb');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `course_id` varchar(45) NOT NULL,
  `course_name` varchar(50) NOT NULL,
  `teacher_id` varchar(40) NOT NULL,
  `student_number` int(11) NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('2111514a-e79a-4da7-9742-6f3dba0fccfb','math','123',12),('da6fd840-1671-46fe-9a02-2087a2938d0b','chinese','123',123);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_table`
--

DROP TABLE IF EXISTS `new_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `new_table` (
  `id` varchar(40) NOT NULL,
  `student_id` varchar(45) NOT NULL,
  `course_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_table`
--

LOCK TABLES `new_table` WRITE;
/*!40000 ALTER TABLE `new_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `new_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_course`
--

DROP TABLE IF EXISTS `student_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_course` (
  `id` varchar(45) NOT NULL,
  `student_id` varchar(45) NOT NULL,
  `course_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_course`
--

LOCK TABLES `student_course` WRITE;
/*!40000 ALTER TABLE `student_course` DISABLE KEYS */;
INSERT INTO `student_course` VALUES ('1','111','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('2','222','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('3','333','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('4','555','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('5','444','2111514a-e79a-4da7-9742-6f3dba0fccfb'),('50b8112f-5c9b-4100-a7a4-5c5b2f7e796f','MF1832123','da6fd840-1671-46fe-9a02-2087a2938d0b'),('beb82001-9bf0-4f0b-962f-c3c783664b8c','MF1832123','2111514a-e79a-4da7-9742-6f3dba0fccfb');
/*!40000 ALTER TABLE `student_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_info`
--

DROP TABLE IF EXISTS `student_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_info` (
  `student_id` varchar(40) NOT NULL,
  `student_name` varchar(20) NOT NULL,
  `openid` varchar(80) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_info`
--

LOCK TABLES `student_info` WRITE;
/*!40000 ALTER TABLE `student_info` DISABLE KEYS */;
INSERT INTO `student_info` VALUES ('111','张三','1'),('222','李四','1'),('333','王五','1'),('444','赵六','1'),('555','mary','1'),('MF1832123','毛越','undefined');
/*!40000 ALTER TABLE `student_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'signin'
--

--
-- Dumping routines for database 'signin'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-27 20:13:38
