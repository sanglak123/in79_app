import sequelize from '@/server/db/config/connection';
import 'dotenv/config';


(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ DB connected');
    } catch (e) {
        console.error('❌ DB connect error:', e);
    } finally {
        await sequelize.close().catch(() => { });
    }
})();
