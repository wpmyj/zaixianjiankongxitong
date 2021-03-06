﻿using System;
using System.Runtime.Serialization;
namespace Entity
{
    /// <summary>
    /// 系统日志
    /// </summary>
    [Serializable]
    [DataContract]
    public class SYSTEMLOG
    {
        /// <summary>
        /// ID
        /// </summary>
        [DataMember]
        public string LOG_ID { get; set; }
        /// <summary>
        /// 日志名称
        /// </summary>
        [DataMember]
        public string LOGNAME { get; set; }
        /// <summary>
        /// 日志类型
        /// </summary>
        [DataMember]
        public string TYPE { get; set; }
        /// <summary>
        /// 日志内容
        /// </summary>
        [DataMember]
        public string CONTENT { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        [DataMember]
        public string F_ACCOUNT { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        [DataMember]
        public string REMARK { get; set; }
        /// <summary>
        /// 日期
        /// </summary>
        [DataMember]
        public DateTime DATETIME { get; set; }
    }
}