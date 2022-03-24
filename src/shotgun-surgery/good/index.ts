import { Account, ACCOUNT_ROLES } from "./account";

const a = new Account("some-random-uuid", ACCOUNT_ROLES.ADMIN);

a.create();
a.update();
a.delete();

const b = new Account("some-random-uuid-2", ACCOUNT_ROLES.USER);

b.create(); // throws
b.update(); // throws
b.delete(); // throws
