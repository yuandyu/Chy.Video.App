import { WriteLog } from '../api/LogApi';
export const writeLog = {
  methods: {
    async GetWriteLog(data) {
      await WriteLog(data);
    },
  }
}
