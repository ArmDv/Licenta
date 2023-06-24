// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { User } = initSchema(schema);

export {
  User,
  Sex
};