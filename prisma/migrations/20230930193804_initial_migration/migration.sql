-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobileNumber" TEXT,
    "emailAddress" TEXT,
    "deptId" INTEGER,
    "desigId" INTEGER,
    "roleId" INTEGER,
    "orgId" INTEGER,
    "companyId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "descriptoin" TEXT,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllModule" (
    "id" SERIAL NOT NULL,
    "moduleName" TEXT NOT NULL,
    "moduleDes" TEXT,
    "moduleLogo" TEXT,
    "serialNo" INTEGER,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "AllModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleLink" (
    "id" SERIAL NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "linkeNameMenuName" TEXT NOT NULL,
    "menuOrSubmenuStatus" INTEGER NOT NULL,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "ModuleLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleLinkAssign" (
    "id" SERIAL NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "moduleLinkId" INTEGER NOT NULL,
    "userLabel" INTEGER NOT NULL,
    "permissionStatus" BOOLEAN NOT NULL,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "ModuleLinkAssign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeInfo" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT,
    "mobileOne" TEXT,
    "mobileTwo" TEXT,
    "emergencyMobile" TEXT,
    "officeEmail" TEXT,
    "personalEmail" TEXT,
    "empImage" TEXT,
    "empSignature" TEXT,
    "nationalId" INTEGER,
    "departmentId" INTEGER,
    "designationId" INTEGER,
    "empType" INTEGER,
    "leaveApplicableStatus" BOOLEAN,
    "dateOfBirts" TEXT,
    "genderId" INTEGER,
    "religionId" INTEGER,
    "bloodGroupId" INTEGER,
    "maritialStatus" BOOLEAN,
    "spousName" TEXT,
    "spouseProfe" INTEGER,
    "fatherOrHusbandName" TEXT,
    "fatherOrHusbandProfe" INTEGER,
    "fatherOrHusbandMobile" TEXT,
    "motherName" TEXT,
    "motherProfe" INTEGER,
    "motherMobile" TEXT,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "EmployeeInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeePresentAddress" (
    "id" SERIAL NOT NULL,
    "empId" INTEGER,
    "presentDiviId" INTEGER,
    "presentDistId" INTEGER,
    "presentPSId" INTEGER,
    "presentCityCor" INTEGER,
    "presentWord" INTEGER,
    "presentWordNo" INTEGER,
    "presentVillRoad" INTEGER,
    "presentBasHolding" INTEGER,
    "presentPostOffice" INTEGER,
    "presentPostOfficeCode" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "EmployeePresentAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeePermanentAddress" (
    "id" SERIAL NOT NULL,
    "empId" INTEGER,
    "perDiviId" INTEGER,
    "pertDisId" INTEGER,
    "pertPSId" INTEGER,
    "perCityCor" INTEGER,
    "perWord" INTEGER,
    "perWordNo" INTEGER,
    "perVillRoad" INTEGER,
    "perBasHolding" INTEGER,
    "perPostOffice" INTEGER,
    "perPostOfficeCode" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "EmployeePermanentAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeEdu" (
    "id" SERIAL NOT NULL,
    "empId" INTEGER,
    "degreeId" INTEGER,
    "boardId" INTEGER,
    "resultType" INTEGER,
    "resultGPA" TEXT,
    "resultDivision" TEXT,
    "certificateImage" TEXT,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "EmployeeEdu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeType" (
    "id" SERIAL NOT NULL,
    "empTypeName" TEXT NOT NULL,
    "empTypeDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "EmployeeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "departmentName" TEXT NOT NULL,
    "departmentDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gender" (
    "id" SERIAL NOT NULL,
    "genderName" TEXT NOT NULL,
    "genderDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Religion" (
    "id" SERIAL NOT NULL,
    "religionName" TEXT NOT NULL,
    "religionDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Religion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bloodgroup" (
    "id" SERIAL NOT NULL,
    "bloodGroupName" TEXT NOT NULL,
    "bloodGroupDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Bloodgroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Division" (
    "id" SERIAL NOT NULL,
    "divisionName" TEXT NOT NULL,
    "divisionDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Division_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "districtName" TEXT NOT NULL,
    "districtDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thana" (
    "id" SERIAL NOT NULL,
    "thanaName" TEXT NOT NULL,
    "thanaDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Thana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Designation" (
    "id" SERIAL NOT NULL,
    "designationName" TEXT NOT NULL,
    "designationDes" TEXT,
    "orgId" INTEGER,
    "serialNo" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Designation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaveParent" (
    "id" SERIAL NOT NULL,
    "empId" INTEGER,
    "leaveStatus" INTEGER,
    "leaveReasons" TEXT,
    "leaveDes" TEXT,
    "attachments" TEXT,
    "leaveLocation" TEXT,
    "emergencyContact" TEXT,
    "leaveFromDate" DATE,
    "leaveToDate" DATE,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "LeaveParent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaveChild" (
    "id" SERIAL NOT NULL,
    "leaveId" INTEGER,
    "leaveDate" DATE,
    "leaveFromTime" TEXT,
    "leaveToTime" TEXT,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "LeaveChild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movement" (
    "id" SERIAL NOT NULL,
    "empId" INTEGER,
    "clientId" INTEGER,
    "projectId" INTEGER,
    "movementStatus" INTEGER,
    "movementReasons" TEXT,
    "movementDes" TEXT,
    "movementFromDate" TEXT,
    "movementToDate" TEXT,
    "movementFromTime" TEXT,
    "movementToTime" TEXT,
    "emergencyContact" TEXT,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Movement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "empId" INTEGER,
    "attendanceDate" TEXT,
    "logInTime" TEXT,
    "logOutTime" TEXT,
    "biometricId" INTEGER,
    "machineId" INTEGER,
    "shiftId" INTEGER,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Holidays" (
    "id" SERIAL NOT NULL,
    "holidayTitle" TEXT,
    "hlidayDescription" TEXT,
    "date" TEXT,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Holidays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "countryName" TEXT,
    "countryDescription" TEXT,
    "countryCode" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvSupplier" (
    "id" SERIAL NOT NULL,
    "supplierName" TEXT,
    "supplierDescription" TEXT,
    "countryId" INTEGER,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "InvSupplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvItemsGroup" (
    "id" SERIAL NOT NULL,
    "udId" INTEGER,
    "groupName" TEXT,
    "groupDescription" TEXT,
    "remarks" TEXT,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "InvItemsGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measurement" (
    "id" SERIAL NOT NULL,
    "measurementName" TEXT NOT NULL,
    "measurementDescription" TEXT,
    "remarks" TEXT,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "Measurement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvItemSetup" (
    "id" SERIAL NOT NULL,
    "udId" INTEGER,
    "itemCode" TEXT,
    "modelNo" TEXT,
    "itemGroupId" INTEGER,
    "itemName" TEXT NOT NULL,
    "itemDescription" TEXT,
    "measurementtId" INTEGER,
    "costPrice" DOUBLE PRECISION,
    "salePrice" DOUBLE PRECISION,
    "manufactureDate" TIMESTAMP(3),
    "expireDate" TIMESTAMP(3),
    "taxRate" DOUBLE PRECISION,
    "reorderLabel" INTEGER,
    "supplierId" INTEGER,
    "itemImage" TEXT,
    "remarks" TEXT,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "InvItemSetup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequisitionParent" (
    "id" SERIAL NOT NULL,
    "requisitionNo" TEXT NOT NULL,
    "requisitionType" INTEGER,
    "requisitionFrom" INTEGER,
    "requisitionTo" INTEGER,
    "itemGroupId" INTEGER,
    "itemId" INTEGER,
    "requisitionDate" TIMESTAMP(3) NOT NULL,
    "requisitionStatus" INTEGER NOT NULL DEFAULT 0,
    "requisitionRemarks" TEXT NOT NULL,
    "requisitionAppCanRemarks" TEXT NOT NULL,
    "requisitionBy" INTEGER,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "RequisitionParent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequisitionChild" (
    "id" SERIAL NOT NULL,
    "requisitionId" INTEGER,
    "itemGroupId" INTEGER,
    "itemId" INTEGER,
    "uomId" INTEGER,
    "qty" INTEGER NOT NULL,
    "price" INTEGER,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "RequisitionChild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequisitionApproveParent" (
    "id" SERIAL NOT NULL,
    "requisitionNo" TEXT NOT NULL,
    "requisitionType" INTEGER,
    "requisitionFrom" INTEGER,
    "requisitionTo" INTEGER,
    "itemGroupId" INTEGER,
    "itemId" INTEGER,
    "requisitionDate" TIMESTAMP(3) NOT NULL,
    "requisitionStatus" INTEGER NOT NULL DEFAULT 0,
    "requisitionRemarks" TEXT NOT NULL,
    "requisitionBy" INTEGER,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "RequisitionApproveParent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequisitionApproveChild" (
    "id" SERIAL NOT NULL,
    "requisitionApproveId" INTEGER,
    "requisitionId" INTEGER,
    "itemGroupId" INTEGER,
    "itemId" INTEGER,
    "uomId" INTEGER,
    "approvedQty" INTEGER,
    "receivedQty" INTEGER,
    "price" INTEGER,
    "orgId" INTEGER,
    "activeStatus" BOOLEAN NOT NULL DEFAULT true,
    "createdDate" TEXT,
    "createdTime" TEXT,
    "createdBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TEXT,
    "updatedTime" TEXT,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" INTEGER,

    CONSTRAINT "RequisitionApproveChild_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_designationId_fkey" FOREIGN KEY ("designationId") REFERENCES "Designation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_empType_fkey" FOREIGN KEY ("empType") REFERENCES "EmployeeType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_religionId_fkey" FOREIGN KEY ("religionId") REFERENCES "Religion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_bloodGroupId_fkey" FOREIGN KEY ("bloodGroupId") REFERENCES "Bloodgroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePresentAddress" ADD CONSTRAINT "EmployeePresentAddress_empId_fkey" FOREIGN KEY ("empId") REFERENCES "EmployeeInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePresentAddress" ADD CONSTRAINT "EmployeePresentAddress_presentDiviId_fkey" FOREIGN KEY ("presentDiviId") REFERENCES "Division"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePresentAddress" ADD CONSTRAINT "EmployeePresentAddress_presentDistId_fkey" FOREIGN KEY ("presentDistId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePresentAddress" ADD CONSTRAINT "EmployeePresentAddress_presentPSId_fkey" FOREIGN KEY ("presentPSId") REFERENCES "Thana"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePermanentAddress" ADD CONSTRAINT "EmployeePermanentAddress_empId_fkey" FOREIGN KEY ("empId") REFERENCES "EmployeeInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePermanentAddress" ADD CONSTRAINT "EmployeePermanentAddress_perDiviId_fkey" FOREIGN KEY ("perDiviId") REFERENCES "Division"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePermanentAddress" ADD CONSTRAINT "EmployeePermanentAddress_pertDisId_fkey" FOREIGN KEY ("pertDisId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePermanentAddress" ADD CONSTRAINT "EmployeePermanentAddress_pertPSId_fkey" FOREIGN KEY ("pertPSId") REFERENCES "Thana"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeEdu" ADD CONSTRAINT "EmployeeEdu_empId_fkey" FOREIGN KEY ("empId") REFERENCES "EmployeeInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaveParent" ADD CONSTRAINT "LeaveParent_empId_fkey" FOREIGN KEY ("empId") REFERENCES "EmployeeInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaveChild" ADD CONSTRAINT "LeaveChild_leaveId_fkey" FOREIGN KEY ("leaveId") REFERENCES "LeaveParent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movement" ADD CONSTRAINT "Movement_empId_fkey" FOREIGN KEY ("empId") REFERENCES "EmployeeInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_empId_fkey" FOREIGN KEY ("empId") REFERENCES "EmployeeInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvSupplier" ADD CONSTRAINT "InvSupplier_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvItemSetup" ADD CONSTRAINT "InvItemSetup_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "InvItemsGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvItemSetup" ADD CONSTRAINT "InvItemSetup_measurementtId_fkey" FOREIGN KEY ("measurementtId") REFERENCES "Measurement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvItemSetup" ADD CONSTRAINT "InvItemSetup_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "InvSupplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionChild" ADD CONSTRAINT "RequisitionChild_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "RequisitionParent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionChild" ADD CONSTRAINT "RequisitionChild_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "InvItemsGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionChild" ADD CONSTRAINT "RequisitionChild_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "InvItemSetup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionChild" ADD CONSTRAINT "RequisitionChild_uomId_fkey" FOREIGN KEY ("uomId") REFERENCES "Measurement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionApproveChild" ADD CONSTRAINT "RequisitionApproveChild_requisitionApproveId_fkey" FOREIGN KEY ("requisitionApproveId") REFERENCES "RequisitionApproveParent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionApproveChild" ADD CONSTRAINT "RequisitionApproveChild_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "RequisitionParent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionApproveChild" ADD CONSTRAINT "RequisitionApproveChild_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "InvItemsGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionApproveChild" ADD CONSTRAINT "RequisitionApproveChild_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "InvItemSetup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionApproveChild" ADD CONSTRAINT "RequisitionApproveChild_uomId_fkey" FOREIGN KEY ("uomId") REFERENCES "Measurement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
