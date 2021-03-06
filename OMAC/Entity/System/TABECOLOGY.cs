﻿using System;
using System.Runtime.Serialization;
namespace Entity 
{
		[Serializable]
    [DataContract]
	public class TABECOLOGY
	{
   		/// <summary>
        /// DEVICECODE
        /// </summary>
        [DataMember]
		public string DEVICECODE { get; set; }
		/// <summary>
        /// DATETIME
        /// </summary>
        [DataMember]
		public DateTime DATETIME { get; set; }
		/// <summary>
        /// SENDNUM
        /// </summary>
        [DataMember]
		public decimal SENDNUM { get; set; }
		/// <summary>
        /// RECVNUM
        /// </summary>
        [DataMember]
		public decimal RECVNUM { get; set; }
		/// <summary>
        /// 水温
        /// </summary>
        [DataMember]
		public decimal WATERTEM { get; set; }
		/// <summary>
        /// 盐度
        /// </summary>
        [DataMember]
		public decimal SALINITY { get; set; }
		/// <summary>
        /// 电导率
        /// </summary>
        [DataMember]
		public decimal CONDUCTIVITY { get; set; }
		/// <summary>
        /// 溶解氧
        /// </summary>
        [DataMember]
		public decimal OXYGEN { get; set; }
		/// <summary>
        /// PH
        /// </summary>
        [DataMember]
		public decimal PH { get; set; }
		/// <summary>
        /// 浊度
        /// </summary>
        [DataMember]
		public decimal TURBIDITY { get; set; }
		/// <summary>
        /// 水下CO2
        /// </summary>
        [DataMember]
		public decimal UNDERWATERCO2 { get; set; }
		/// <summary>
        /// 化学需氧量
        /// </summary>
        [DataMember]
		public decimal OXYGENCHEMICAL { get; set; }
		/// <summary>
        /// 高锰酸
        /// </summary>
        [DataMember]
		public decimal MNO4 { get; set; }
		/// <summary>
        /// 生物需氧量
        /// </summary>
        [DataMember]
		public decimal OXYGENBIOLOGY { get; set; }
		/// <summary>
        /// 氨氮
        /// </summary>
        [DataMember]
		public decimal NH3N { get; set; }
		/// <summary>
        /// 硝酸
        /// </summary>
        [DataMember]
		public decimal NO3 { get; set; }
		/// <summary>
        /// 亚硝酸
        /// </summary>
        [DataMember]
		public decimal NO2 { get; set; }
		/// <summary>
        /// 磷酸
        /// </summary>
        [DataMember]
		public decimal PO4 { get; set; }
		/// <summary>
        /// 硅酸
        /// </summary>
        [DataMember]
		public decimal SIO3 { get; set; }
		/// <summary>
        /// RESERV0
        /// </summary>
        [DataMember]
		public decimal RESERV0 { get; set; }
		/// <summary>
        /// RESERV1
        /// </summary>
        [DataMember]
		public decimal RESERV1 { get; set; }
		/// <summary>
        /// RESERV2
        /// </summary>
        [DataMember]
		public decimal RESERV2 { get; set; }
		/// <summary>
        /// RESERV3
        /// </summary>
        [DataMember]
		public decimal RESERV3 { get; set; }
		/// <summary>
        /// RESERV4
        /// </summary>
        [DataMember]
		public decimal RESERV4 { get; set; }
		/// <summary>
        /// RESERV5
        /// </summary>
        [DataMember]
		public decimal RESERV5 { get; set; }
		/// <summary>
        /// RESERV6
        /// </summary>
        [DataMember]
		public decimal RESERV6 { get; set; }
		/// <summary>
        /// RESERV7
        /// </summary>
        [DataMember]
		public decimal RESERV7 { get; set; }
		/// <summary>
        /// RESERV8
        /// </summary>
        [DataMember]
		public decimal RESERV8 { get; set; }
		/// <summary>
        /// RESERV9
        /// </summary>
        [DataMember]
		public decimal RESERV9 { get; set; }
		/// <summary>
        /// 总磷
        /// </summary>
        [DataMember]
		public decimal P { get; set; }
		/// <summary>
        /// 总氮
        /// </summary>
        [DataMember]
		public decimal N { get; set; }
		/// <summary>
        /// 总碳
        /// </summary>
        [DataMember]
		public decimal C { get; set; }
		/// <summary>
        /// 硫化物
        /// </summary>
        [DataMember]
		public decimal S { get; set; }
		/// <summary>
        /// 悬浮物
        /// </summary>
        [DataMember]
		public decimal SUSPENSION { get; set; }
		/// <summary>
        /// 氰化物
        /// </summary>
        [DataMember]
		public decimal CYANIDE { get; set; }
		/// <summary>
        /// 总汞
        /// </summary>
        [DataMember]
		public decimal HG { get; set; }
		/// <summary>
        /// 总铬
        /// </summary>
        [DataMember]
		public decimal CR { get; set; }
		/// <summary>
        /// 六价铬
        /// </summary>
        [DataMember]
		public decimal CR6 { get; set; }
		/// <summary>
        /// 总铅
        /// </summary>
        [DataMember]
		public decimal PB { get; set; }
		/// <summary>
        /// AS
        /// </summary>
        [DataMember]
		public decimal AS { get; set; }
		/// <summary>
        /// 叶绿素a
        /// </summary>
        [DataMember]
		public decimal YLSA { get; set; }
		/// <summary>
        /// 藻蓝素
        /// </summary>
        [DataMember]
		public decimal PHYCOCY { get; set; }
		/// <summary>
        /// 藻红素
        /// </summary>
        [DataMember]
		public decimal PHYCOER { get; set; }
		/// <summary>
        /// 粪大肠菌
        /// </summary>
        [DataMember]
		public decimal COLIFORM { get; set; }
		/// <summary>
        /// POTENTIAL
        /// </summary>
        [DataMember]
		public decimal POTENTIAL { get; set; }
		/// <summary>
        /// 总Y
        /// </summary>
        [DataMember]
		public decimal TOTALY { get; set; }
		/// <summary>
        /// 钾
        /// </summary>
        [DataMember]
		public decimal K40 { get; set; }
		/// <summary>
        /// 134Cs
        /// </summary>
        [DataMember]
		public decimal CS134 { get; set; }
		/// <summary>
        /// 137Cs
        /// </summary>
        [DataMember]
		public decimal CS137 { get; set; }
		/// <summary>
        /// 60Co
        /// </summary>
        [DataMember]
		public decimal CO60 { get; set; }
		/// <summary>
        /// 铜
        /// </summary>
        [DataMember]
		public decimal CU { get; set; }
		/// <summary>
        /// 锌
        /// </summary>
        [DataMember]
		public decimal ZN { get; set; }
		/// <summary>
        /// 挥发酚
        /// </summary>
        [DataMember]
		public decimal PHENOL { get; set; }
		/// <summary>
        /// BOD5
        /// </summary>
        [DataMember]
		public decimal BOD5 { get; set; }
		/// <summary>
        /// ORGANIC
        /// </summary>
        [DataMember]
		public decimal ORGANIC { get; set; }
		/// <summary>
        /// DETERGENTS
        /// </summary>
        [DataMember]
		public decimal DETERGENTS { get; set; }
		/// <summary>
        /// 油
        /// </summary>
        [DataMember]
		public decimal OIL { get; set; }
		/// <summary>
        /// VIRUS
        /// </summary>
        [DataMember]
		public decimal VIRUS { get; set; }
		/// <summary>
        /// PETRO
        /// </summary>
        [DataMember]
		public decimal PETRO { get; set; }
		/// <summary>
        /// DDT
        /// </summary>
        [DataMember]
		public decimal DDT { get; set; }
		/// <summary>
        /// PCBS
        /// </summary>
        [DataMember]
		public decimal PCBS { get; set; }
		/// <summary>
        /// BENZOL
        /// </summary>
        [DataMember]
		public decimal BENZOL { get; set; }
		/// <summary>
        /// CHLO
        /// </summary>
        [DataMember]
		public decimal CHLO { get; set; }
		/// <summary>
        /// ANTIBIOTIC
        /// </summary>
        [DataMember]
		public decimal ANTIBIOTIC { get; set; }
		/// <summary>
        /// POISONA
        /// </summary>
        [DataMember]
		public decimal POISONA { get; set; }
		/// <summary>
        /// POISONB
        /// </summary>
        [DataMember]
		public decimal POISONB { get; set; }
		/// <summary>
        /// RESERV10
        /// </summary>
        [DataMember]
		public decimal RESERV10 { get; set; }
		/// <summary>
        /// RESERV11
        /// </summary>
        [DataMember]
		public decimal RESERV11 { get; set; }
		/// <summary>
        /// RESERV12
        /// </summary>
        [DataMember]
		public decimal RESERV12 { get; set; }
		/// <summary>
        /// RESERV13
        /// </summary>
        [DataMember]
		public decimal RESERV13 { get; set; }
		/// <summary>
        /// RESERV14
        /// </summary>
        [DataMember]
		public decimal RESERV14 { get; set; }
		/// <summary>
        /// RESERV15
        /// </summary>
        [DataMember]
		public decimal RESERV15 { get; set; }
		/// <summary>
        /// RESERV16
        /// </summary>
        [DataMember]
		public decimal RESERV16 { get; set; }
		/// <summary>
        /// RESERV17
        /// </summary>
        [DataMember]
		public decimal RESERV17 { get; set; }
		/// <summary>
        /// RESERV18
        /// </summary>
        [DataMember]
		public decimal RESERV18 { get; set; }
		/// <summary>
        /// RESERV19
        /// </summary>
        [DataMember]
		public decimal RESERV19 { get; set; }
		/// <summary>
        /// 水深
        /// </summary>
        [DataMember]
		public decimal DEPTH { get; set; }
		/// <summary>
        /// 水位
        /// </summary>
        [DataMember]
		public decimal WATERLEVEL { get; set; }
		/// <summary>
        /// 流速
        /// </summary>
        [DataMember]
		public decimal CURRENTSPD { get; set; }
		/// <summary>
        /// 流向
        /// </summary>
        [DataMember]
		public decimal CURRENTDIR { get; set; }
		/// <summary>
        /// 流量
        /// </summary>
        [DataMember]
		public decimal CURRENTVOL { get; set; }
		/// <summary>
        /// 镉
        /// </summary>
        [DataMember]
		public decimal CD { get; set; }
		/// <summary>
        /// 氟
        /// </summary>
        [DataMember]
		public decimal F { get; set; }
		/// <summary>
        /// 总镍
        /// </summary>
        [DataMember]
		public decimal NI { get; set; }
			}
}