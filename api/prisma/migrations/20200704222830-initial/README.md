# Migration `20200704222830-initial`

This migration has been generated by Marcus Feitoza at 7/4/2020, 10:28:30 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."User" (
"email" TEXT NOT NULL  ,"id" TEXT NOT NULL  ,"name" TEXT NOT NULL  ,"phone" TEXT NOT NULL  ,
    PRIMARY KEY ("id"))

CREATE TABLE "quaint"."Company" (
"address" TEXT NOT NULL  ,"city" TEXT NOT NULL  ,"company" TEXT NOT NULL  ,"id" TEXT NOT NULL  ,"isSupplier" BOOLEAN NOT NULL DEFAULT false ,"state" TEXT NOT NULL  ,"userId" TEXT NOT NULL  ,"zipCode" TEXT NOT NULL  ,
    PRIMARY KEY ("id"),FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE TABLE "quaint"."Tag" (
"name" TEXT NOT NULL  ,
    PRIMARY KEY ("name"))

CREATE TABLE "quaint"."Request" (
"companyId" TEXT NOT NULL  ,"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"description" TEXT NOT NULL  ,"id" TEXT NOT NULL  ,"title" TEXT NOT NULL  ,"userId" TEXT NOT NULL  ,"validUntil" DATE NOT NULL  ,
    PRIMARY KEY ("id"),FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE TABLE "quaint"."Response" (
"companyId" TEXT NOT NULL  ,"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"description" TEXT NOT NULL  ,"id" TEXT NOT NULL  ,"requestId" TEXT NOT NULL  ,"status" TEXT NOT NULL  ,"title" TEXT NOT NULL  ,
    PRIMARY KEY ("id"),FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("requestId") REFERENCES "Request"("id") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE TABLE "quaint"."_RequestToTag" (
"A" TEXT NOT NULL  ,"B" TEXT NOT NULL  ,FOREIGN KEY ("A") REFERENCES "Request"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("B") REFERENCES "Tag"("name") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE UNIQUE INDEX "quaint"."User.email" ON "User"("email")

CREATE UNIQUE INDEX "quaint"."Company_userId" ON "Company"("userId")

CREATE UNIQUE INDEX "quaint"."_RequestToTag_AB_unique" ON "_RequestToTag"("A","B")

CREATE  INDEX "quaint"."_RequestToTag_B_index" ON "_RequestToTag"("B")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200704222830-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,66 @@
+datasource DS {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+model User {
+  id      String    @id @default(cuid())
+  email   String    @unique
+  name    String
+  phone   String
+  company Company?
+  request Request[]
+}
+
+model Company {
+  id         String     @id @default(cuid())
+  company    String
+  isSupplier Boolean    @default(false)
+  zipCode    String
+  address    String
+  state      String
+  city       String
+  user       User       @relation(fields: [userId], references: [id])
+  userId     String
+  request    Request[]
+  response   Response[]
+}
+
+model Tag {
+  name     String    @id
+  requests Request[] @relation(references: [id])
+}
+
+model Request {
+  id          String     @id @default(cuid())
+  title       String
+  description String
+  tags        Tag[]      @relation(references: [name])
+  createdAt   DateTime   @default(now())
+  company     Company    @relation(fields: [companyId], references: [id])
+  companyId   String
+  user        User       @relation(fields: [userId], references: [id])
+  userId      String
+  validUntil  DateTime
+  responses   Response[]
+}
+
+model Response {
+  id          String   @id @default(cuid())
+  title       String
+  description String
+  createdAt   DateTime @default(now())
+  company     Company  @relation(fields: [companyId], references: [id])
+  companyId   String
+  status      String
+  request     Request  @relation(fields: [requestId], references: [id])
+  requestId   String
+}
```


