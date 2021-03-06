﻿using System;
using System.Data;
using System.Web.Http;

namespace OMAC.Controllers
{
    public class MonitorLogController : ApiController
    {
        /// <summary>
        /// 监控历史记录
        /// </summary>
        /// <param name="queryModel">查询条件</param>
        /// <returns></returns>
        [HttpGet]
        public Entity.MonitorLog.BootstrapTableDataModel GetList([FromUri]Entity.MonitorLog.QueryModel queryModel)
        {
            var mlbn = new Business.BN.MonitorLog();
            var rows = mlbn.GetList(queryModel);
            var rst = new Entity.MonitorLog.BootstrapTableDataModel
            {
                rows = rows,
                total = rows.Rows.Count > 0 ? Convert.ToInt32(rows.Rows[0]["RESULT_COUNT"]) : 0
            };
            return rst;
        }

        /// <summary>
        /// 根据设备类型获取设备列表
        /// </summary>
        /// <param name="devicecode">设备编号</param>
        /// <returns></returns>
        [HttpGet]
        public DataTable GetDeviceList(string devicecode)
        {
            var mlbn = new Business.BN.MonitorLog();
            var deviceList = mlbn.GetDeviceList(devicecode);
            return deviceList;
        }

        
    }
}
