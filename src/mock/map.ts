import Mock from 'mockjs'
import map from '@/public/echartsMap'
Mock.mock('http://localhost:8080/api/map', 'get', () => {
    return map
})