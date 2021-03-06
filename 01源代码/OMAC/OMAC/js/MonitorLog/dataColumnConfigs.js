﻿var DataColumns = function () {
    var rst = {
        // 浮标 - 水质
        "TABBUOYECOLOGY0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                },
                align: "center"
            },
            { field: "CURRENTTEM", title: "海浪水温", align: "center" }, { field: "WATERTEM", title: "独立水温", align: "center" },
            { field: "CTDTEM", title: "CTD水温", align: "center" }, { field: "SALINITY", title: "盐度", align: "center" }, { field: "CONDUCTIVITY", title: "电导率", align: "center" },
            { field: "OXYGEN", title: "溶解氧(DO)", align: "center" }, { field: "PH", title: "PH值", align: "center" }, { field: "TURBIDITY", title: "浊度", align: "center" },
            { field: "YLS", title: "叶绿素", align: "center" }, { field: "YLSTEM", title: "叶绿素温度", align: "center" }, { field: "UNDERWATERCO2", title: "水下二氧化碳", align: "center" },
            { field: "OXYGENCHEMICAL", title: "化学需氧量COD", align: "center" }, { field: "MNO4", title: "高锰酸盐指数", align: "center" }, { field: "OXYGENBIOLOGY", title: "生化需氧量", align: "center" },
            { field: "NH3N", title: "氨氮(铵盐)", align: "center" }, { field: "NO3", title: "硝酸盐-氮", align: "center" }, { field: "NO2", title: "亚硝酸盐-氮", align: "center" },
            { field: "PO4", title: "活性磷酸盐", align: "center" }, { field: "SIO3", title: "硅酸盐", align: "center" }, { field: "PAHS", title: "多环芳烃", align: "center" },
            { field: "P", title: "总磷", align: "center" }, { field: "N", title: "总氮", align: "center" }, { field: "C", title: "总有机碳", align: "center" }, { field: "S", title: "硫", align: "center" },
            { field: "ALKALINITY", title: "总碱度", align: "center" }, { field: "SUSPENSION", title: "悬浮物", align: "center" }, { field: "CYANIDE", title: "氰化物", align: "center" },
            { field: "HG", title: "汞", align: "center" }, { field: "CD", title: "镉", align: "center" }, { field: "CR6", title: "六价铬", align: "center" },
            { field: "PB", title: "铅", align: "center" }, { field: "AS", title: "砷", align: "center" }, { field: "YLSA", title: "叶绿素-a", align: "center" },
            { field: "PHYCOCY", title: "藻蓝素", align: "center" }, { field: "PHYCOER", title: "藻红素", align: "center" }, { field: "COLIFORM", title: "粪大肠菌群", align: "center" },
            { field: "POTENTIAL", title: "氧化还原电位", align: "center" }, { field: "TOTALY", title: "总γ", align: "center" }, { field: "K40", title: "40K", align: "center" },
            { field: "CS134", title: "134Cs", align: "center" }, { field: "CS137", title: "137Cs", align: "center" }, { field: "CO60", title: "60Co", align: "center" },
            { field: "CU", title: "铜", align: "center" }, { field: "ZN", title: "锌" }, { field: "PHENOL", title: "挥发酚", align: "center" },
            { field: "BOD5", title: "BOD5", align: "center" }, { field: "ORGANIC", title: "挥发性有机物", align: "center" }, { field: "DETERGENTS", title: "阴离子洗涤剂", align: "center" },
            { field: "OIL", title: "油类", align: "center" }, { field: "VIRUS", title: "细菌总数", align: "center" }, { field: "PETRO", title: "石油烃", align: "center" },
            { field: "DDT", title: "DDT", align: "center" }, { field: "PCBS", title: "PCBs", align: "center" }, { field: "BENZOL", title: "多氯联苯", align: "center" },
            { field: "CHLO", title: "氯霉素", align: "center" }, { field: "ANTIBIOTIC", title: "抗生素", align: "center" }, { field: "POISONA", title: "腹泻性贝毒", align: "center" },
            { field: "POISONB", title: "麻痹性贝毒", align: "center" }
        ],
        // 岸基 - 水质
        "TABECOLOGY0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "WATERTEM", title: "水温", align: "center" }, { field: "SALINITY", title: "盐度", align: "center" }, { field: "CONDUCTIVITY", title: "电导率", align: "center" },
            { field: "OXYGEN", title: "溶解氧", align: "center" }, { field: "PH", title: "PH值", align: "center" }, { field: "TURBIDITY", title: "浊度", align: "center" },
            { field: "UNDERWATERCO2", title: "水下二氧化碳", align: "center" }, { field: "OXYGENCHEMICAL", title: "化学需氧量", align: "center" }, { field: "MNO4", title: "高锰酸盐指数", align: "center" },
            { field: "OXYGENBIOLOGY", title: "生化需氧量", align: "center" }, { field: "NH3N", title: "氨氮(铵盐)", align: "center" }, { field: "NO3", title: "硝酸盐-氮", align: "center" },
            { field: "NO2", title: "亚硝酸盐-氮", align: "center" }, { field: "PO4", title: "活性磷酸盐", align: "center" }, { field: "SIO3", title: "硅酸盐", align: "center" },
            { field: "P", title: "总磷", align: "center" }, { field: "N", title: "总氮", align: "center" }, { field: "C", title: "总有机碳", align: "center" },
            { field: "S", title: "硫", align: "center" }, { field: "SUSPENSION", title: "悬浮物", align: "center" }, { field: "CYANIDE", title: "氰化物", align: "center" },
            { field: "HG", title: "汞", align: "center" }, { field: "CR", title: "总铬", align: "center" }, { field: "CR6", title: "六价铬", align: "center" },
            { field: "PB", title: "铅", align: "center" }, { field: "AS", title: "砷", align: "center" }, { field: "YLSA", title: "叶绿素-a", align: "center" },
            { field: "PHYCOCY", title: "藻蓝素", align: "center" }, { field: "PHYCOER", title: "藻红素", align: "center" }, { field: "COLIFORM", title: "粪大肠菌群", align: "center" },
            { field: "POTENTIAL", title: "氧化还原电位", align: "center" }, { field: "TOTALY", title: "总γ", align: "center" }, { field: "K40", title: "40K", align: "center" },
            { field: "CS134", title: "134Cs", align: "center" }, { field: "CS137", title: "137Cs", align: "center" }, { field: "CO60", title: "60Co", align: "center" },
            { field: "CU", title: "铜", align: "center" }, { field: "ZN", title: "锌", align: "center" }, { field: "PHENOL", title: "挥发酚", align: "center" },
            { field: "BOD5", title: "BOD5", align: "center" }, { field: "ORGANIC", title: "挥发性有机物", align: "center" }, { field: "DETERGENTS", title: "阴离子洗涤剂", align: "center" },
            { field: "OIL", title: "油类", align: "center" }, { field: "VIRUS", title: "细菌总数", align: "center" }, { field: "PETRO", title: "石油烃", align: "center" },
            { field: "DDT", title: "DDT", align: "center" }, { field: "PCBS", title: "PCBS", align: "center" }, { field: "BENZOL", title: "多氯联苯", align: "center" },
            { field: "CHLO", title: "氯霉素", align: "center" }, { field: "ANTIBIOTIC", title: "抗生素", align: "center" }, { field: "POISONA", title: "腹泻性贝毒", align: "center" },
            { field: "POISONB", title: "麻痹性贝毒", align: "center" }, { field: "DEPTH", title: "水深", align: "center" }, { field: "WATERLEVEL", title: "水位", align: "center" },
            { field: "CURRENTSPD", title: "流速", align: "center" }, { field: "CURRENTDIR", title: "流向", align: "center" }, { field: "CURRENTVOL", title: "流量", align: "center" },
            { field: "CD", title: "镉", align: "center" }, { field: "F", title: "氟", align: "center" }, { field: "NI", title: "总镍", align: "center" }
        ],
        // 浮标 - 状态
        "TABBUOYSTATUS0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "LON", title: "经度", align: "center" }, { field: "LAT", title: "纬度", align: "center" }, { field: "AZIMUTH", title: "方位", align: "center" },
            { field: "VOLTAGE", title: "电压", align: "center" }, { field: "ANCHOR", title: "锚灯", align: "center" }, { field: "WATERALARM", title: "水警", align: "center" },
            { field: "DOORALARM", title: "门警", align: "center" }, { field: "GPSALARM", title: "GPS报警", align: "center" }, { field: "FREEMEMO", title: "内存", align: "center" },
            { field: "SENSERSTATUS", title: "传感器状态", align: "center" }
        ],
        // 岸基 - 状态
        "TABSTATUS0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "TEMPERATURE", title: "湿度状态", align: "center" }, { field: "POWERSTATUS", title: "供电状态", align: "center" }, { field: "FREEMEMO", title: "存储空间", align: "center" },
            { field: "WATERALARM", title: "水警", align: "center" }, { field: "DOORALARM", title: "门警", align: "center" }, { field: "SMOGALARM", title: "烟雾状态", align: "center" },
            { field: "SENSERSTATUS", title: "传感器状态", align: "center" }, { field: "STATIONSTATUS", title: "状态量", align: "center" }
        ],
        // 浮标 - 波浪
        "TABBUOYHYDROLOGY0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "MAXWAVEHIGH", title: "最大波高", align: "center" }, { field: "MAXWAVEPIOD", title: "最大波周期", align: "center" }, { field: "TENTHWAVEHIGH", title: "1/10波高", align: "center" },
            { field: "TENTHWAVEPIOD", title: "1/10波周期", align: "center" }, { field: "AVEWAVEHIGH", title: "平均波高", align: "center" }, { field: "AVEWAVEPIOD", title: "平均波周期", align: "center" },
            { field: "WALIDWAVEHIGH", title: "有效波高", align: "center" }, { field: "WALIDWAVEPIOD", title: "有效波周期", align: "center" }, { field: "WAVEDIR", title: "波向", align: "center" },
            { field: "WAVENUM", title: "波数", align: "center" }
        ],
        // 岸基 - 波浪
        "TABHYDROLOGY0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "MAXWAVEHIGH", title: "最大波高", align: "center" }, { field: "MAXWAVEPIOD", title: "最大波周期", align: "center" }, { field: "AVEWAVEHIGH", title: "平均波高", align: "center" },
            { field: "AVEWAVEPIOD", title: "平均波周期", align: "center" }, { field: "VALIDWAVEHIGH", title: "有效波高", align: "center" }, { field: "VALIDWAVEPIOD", title: "有效波周期", align: "center" },
            { field: "WAVEDIR", title: "波向", align: "center" }
        ],
        // 浮标 - 海流
        "TABBUOYHYDROLOGY1": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "CURRENTSPD1", title: "流速1", align: "center" }, { field: "CURRENTDIR1", title: "流向1", align: "center" },
            { field: "CURRENTSPD2", title: "流速2", align: "center" }, { field: "CURRENTDIR2", title: "流向2", align: "center" },
            { field: "CURRENTSPD3", title: "流速3", align: "center" }, { field: "CURRENTDIR3", title: "流向3", align: "center" },
            { field: "CURRENTSPD4", title: "流速4", align: "center" }, { field: "CURRENTDIR4", title: "流向4", align: "center" },
            { field: "CURRENTSPD5", title: "流速5", align: "center" }, { field: "CURRENTDIR5", title: "流向5", align: "center" },
            { field: "CURRENTSPD6", title: "流速6", align: "center" }, { field: "CURRENTDIR6", title: "流向6", align: "center" },
            { field: "CURRENTSPD7", title: "流速7", align: "center" }, { field: "CURRENTDIR7", title: "流向7", align: "center" },
            { field: "CURRENTSPD8", title: "流速8", align: "center" }, { field: "CURRENTDIR8", title: "流向8", align: "center" },
            { field: "CURRENTSPD9", title: "流速9", align: "center" }, { field: "CURRENTDIR9", title: "流向9", align: "center" },
            { field: "CURRENTSPD10", title: "流速10", align: "center" }, { field: "CURRENTDIR10", title: "流向10", align: "center" },
            { field: "CURRENTSPD11", title: "流速11", align: "center" }, { field: "CURRENTDIR11", title: "流向11", align: "center" },
            { field: "CURRENTSPD12", title: "流速12", align: "center" }, { field: "CURRENTDIR12", title: "流向12", align: "center" },
            { field: "CURRENTSPD13", title: "流速13", align: "center" }, { field: "CURRENTDIR13", title: "流向13", align: "center" },
            { field: "CURRENTSPD14", title: "流速14", align: "center" }, { field: "CURRENTDIR14", title: "流向14", align: "center" },
            { field: "CURRENTSPD15", title: "流速15", align: "center" }, { field: "CURRENTDIR15", title: "流向15", align: "center" },
            { field: "CURRENTSPD16", title: "流速16", align: "center" }, { field: "CURRENTDIR16", title: "流向16", align: "center" },
            { field: "CURRENTSPD17", title: "流速17", align: "center" }, { field: "CURRENTDIR17", title: "流向17", align: "center" },
            { field: "CURRENTSPD18", title: "流速18", align: "center" }, { field: "CURRENTDIR18", title: "流向18", align: "center" },
            { field: "CURRENTSPD19", title: "流速19", align: "center" }, { field: "CURRENTDIR19", title: "流向19", align: "center" },
            { field: "CURRENTSPD20", title: "流速20", align: "center" }, { field: "CURRENTDIR20", title: "流向20", align: "center" },
            { field: "CURRENTSPD21", title: "流速21", align: "center" }, { field: "CURRENTDIR21", title: "流向21", align: "center" },
            { field: "CURRENTSPD22", title: "流速22", align: "center" }, { field: "CURRENTDIR22", title: "流向22", align: "center" },
            { field: "CURRENTSPD23", title: "流速23", align: "center" }, { field: "CURRENTDIR23", title: "流向23", align: "center" },
            { field: "CURRENTSPD24", title: "流速24", align: "center" }, { field: "CURRENTDIR24", title: "流向24", align: "center" },
            { field: "CURRENTSPD25", title: "流速25", align: "center" }, { field: "CURRENTDIR25", title: "流向25", align: "center" },
            { field: "CURRENTSPD26", title: "流速26", align: "center" }, { field: "CURRENTDIR26", title: "流向26", align: "center" },
            { field: "CURRENTSPD27", title: "流速27", align: "center" }, { field: "CURRENTDIR27", title: "流向27", align: "center" },
            { field: "CURRENTSPD28", title: "流速28", align: "center" }, { field: "CURRENTDIR28", title: "流向28", align: "center" },
            { field: "CURRENTSPD29", title: "流速29", align: "center" }, { field: "CURRENTDIR29", title: "流向29", align: "center" },
            { field: "CURRENTSPD30", title: "流速30", align: "center" }, { field: "CURRENTDIR30", title: "流向30", align: "center" },
            { field: "CURRENTSPD31", title: "流速31", align: "center" }, { field: "CURRENTDIR31", title: "流向31", align: "center" },
            { field: "CURRENTSPD32", title: "流速32", align: "center" }, { field: "CURRENTDIR32", title: "流向32", align: "center" },
            { field: "CURRENTSPD33", title: "流速33", align: "center" }, { field: "CURRENTDIR33", title: "流向33", align: "center" },
            { field: "CURRENTSPD34", title: "流速34", align: "center" }, { field: "CURRENTDIR34", title: "流向34", align: "center" },
            { field: "CURRENTSPD35", title: "流速35", align: "center" }, { field: "CURRENTDIR35", title: "流向35", align: "center" },
            { field: "CURRENTSPD36", title: "流速36", align: "center" }, { field: "CURRENTDIR36", title: "流向36", align: "center" },
            { field: "CURRENTSPD37", title: "流速37", align: "center" }, { field: "CURRENTDIR37", title: "流向37", align: "center" },
            { field: "CURRENTSPD38", title: "流速38", align: "center" }, { field: "CURRENTDIR38", title: "流向38", align: "center" },
            { field: "CURRENTSPD39", title: "流速39", align: "center" }, { field: "CURRENTDIR39", title: "流向39", align: "center" },
            { field: "CURRENTSPD40", title: "流速40", align: "center" }, { field: "CURRENTDIR40", title: "流向40", align: "center" }
        ],
        // 岸基 - 海流
        "TABHYDROLOGY1": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "DEPTH", title: "水深", align: "center" }, { field: "WATERLEVEL", title: "水位", align: "center" },
            { field: "CURRENTSPD1", title: "流速1", align: "center" }, { field: "CURRENTDIR1", title: "流向1", align: "center" },
            { field: "CURRENTSPD2", title: "流速2", align: "center" }, { field: "CURRENTDIR2", title: "流向2", align: "center" },
            { field: "CURRENTSPD3", title: "流速3", align: "center" }, { field: "CURRENTDIR3", title: "流向3", align: "center" },
            { field: "CURRENTSPD4", title: "流速4", align: "center" }, { field: "CURRENTDIR4", title: "流向4", align: "center" },
            { field: "CURRENTSPD5", title: "流速5", align: "center" }, { field: "CURRENTDIR5", title: "流向5", align: "center" },
            { field: "CURRENTSPD6", title: "流速6", align: "center" }, { field: "CURRENTDIR6", title: "流向6", align: "center" },
            { field: "CURRENTSPD7", title: "流速7", align: "center" }, { field: "CURRENTDIR7", title: "流向7", align: "center" },
            { field: "CURRENTSPD8", title: "流速8", align: "center" }, { field: "CURRENTDIR8", title: "流向8", align: "center" },
            { field: "CURRENTSPD9", title: "流速9", align: "center" }, { field: "CURRENTDIR9", title: "流向9", align: "center" },
            { field: "CURRENTSPD10", title: "流速10", align: "center" }, { field: "CURRENTDIR10", title: "流向10", align: "center" },
            { field: "CURRENTSPD11", title: "流速11", align: "center" }, { field: "CURRENTDIR11", title: "流向11", align: "center" },
            { field: "CURRENTSPD12", title: "流速12", align: "center" }, { field: "CURRENTDIR12", title: "流向12", align: "center" },
            { field: "CURRENTSPD13", title: "流速13", align: "center" }, { field: "CURRENTDIR13", title: "流向13", align: "center" },
            { field: "CURRENTSPD14", title: "流速14", align: "center" }, { field: "CURRENTDIR14", title: "流向14", align: "center" },
            { field: "CURRENTSPD15", title: "流速15", align: "center" }, { field: "CURRENTDIR15", title: "流向15", align: "center" },
            { field: "CURRENTSPD16", title: "流速16", align: "center" }, { field: "CURRENTDIR16", title: "流向16", align: "center" },
            { field: "CURRENTSPD17", title: "流速17", align: "center" }, { field: "CURRENTDIR17", title: "流向17", align: "center" },
            { field: "CURRENTSPD18", title: "流速18", align: "center" }, { field: "CURRENTDIR18", title: "流向18", align: "center" },
            { field: "CURRENTSPD19", title: "流速19", align: "center" }, { field: "CURRENTDIR19", title: "流向19", align: "center" },
            { field: "CURRENTSPD20", title: "流速20", align: "center" }, { field: "CURRENTDIR20", title: "流向20", align: "center" },
            { field: "CURRENTSPD21", title: "流速21", align: "center" }, { field: "CURRENTDIR21", title: "流向21", align: "center" },
            { field: "CURRENTSPD22", title: "流速22", align: "center" }, { field: "CURRENTDIR22", title: "流向22", align: "center" },
            { field: "CURRENTSPD23", title: "流速23", align: "center" }, { field: "CURRENTDIR23", title: "流向23", align: "center" },
            { field: "CURRENTSPD24", title: "流速24", align: "center" }, { field: "CURRENTDIR24", title: "流向24", align: "center" },
            { field: "CURRENTSPD25", title: "流速25", align: "center" }, { field: "CURRENTDIR25", title: "流向25", align: "center" },
            { field: "CURRENTSPD26", title: "流速26", align: "center" }, { field: "CURRENTDIR26", title: "流向26", align: "center" },
            { field: "CURRENTSPD27", title: "流速27", align: "center" }, { field: "CURRENTDIR27", title: "流向27", align: "center" },
            { field: "CURRENTSPD28", title: "流速28", align: "center" }, { field: "CURRENTDIR28", title: "流向28", align: "center" },
            { field: "CURRENTSPD29", title: "流速29", align: "center" }, { field: "CURRENTDIR29", title: "流向29", align: "center" },
            { field: "CURRENTSPD30", title: "流速30", align: "center" }, { field: "CURRENTDIR30", title: "流向30", align: "center" },
            { field: "CURRENTSPD31", title: "流速31", align: "center" }, { field: "CURRENTDIR31", title: "流向31", align: "center" },
            { field: "CURRENTSPD32", title: "流速32", align: "center" }, { field: "CURRENTDIR32", title: "流向32", align: "center" },
            { field: "CURRENTSPD33", title: "流速33", align: "center" }, { field: "CURRENTDIR33", title: "流向33", align: "center" },
            { field: "CURRENTSPD34", title: "流速34", align: "center" }, { field: "CURRENTDIR34", title: "流向34", align: "center" },
            { field: "CURRENTSPD35", title: "流速35", align: "center" }, { field: "CURRENTDIR35", title: "流向35", align: "center" },
            { field: "CURRENTSPD36", title: "流速36", align: "center" }, { field: "CURRENTDIR36", title: "流向36", align: "center" },
            { field: "CURRENTSPD37", title: "流速37", align: "center" }, { field: "CURRENTDIR37", title: "流向37", align: "center" },
            { field: "CURRENTSPD38", title: "流速38", align: "center" }, { field: "CURRENTDIR38", title: "流向38", align: "center" },
            { field: "CURRENTSPD39", title: "流速39", align: "center" }, { field: "CURRENTDIR39", title: "流向39", align: "center" },
            { field: "CURRENTSPD40", title: "流速40", align: "center" }, { field: "CURRENTDIR40", title: "流向40", align: "center" }
        ],
        // 浮标 - 气象
        "TABBUOYQIXG0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "NJD", title: "能见度", align: "center" }, { field: "RAINFALLACTUAL", title: "实际雨量", align: "center" }, { field: "RAINFALLPREV", title: "测前雨量", align: "center" }, { field: "RAINFALL", title: "雨量", align: "center" },
            { field: "TOTALRADIATION", title: "总辐射", align: "center" }, { field: "INFRAREDRADIATION", title: "红外辐射", align: "center" }, { field: "SUNLIGHTTIME", title: "日照时间", align: "center" }, { field: "AIRCO2", title: "二氧化碳", align: "center" }
        ],
        // 岸基 - 气象
        "TABQIXG0": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "NJD", title: "能见度", align: "center" }, { field: "RAINFALL", title: "雨量", align: "center" }, { field: "TOTALRADIATION", title: "总辐射", align: "center" },
            { field: "INFRAREDRADIATION", title: "红外辐射", align: "center" }, { field: "SUNLIGHTTIME", title: "日照时间", align: "center" }, { field: "AIRCO2", title: "空气二氧化碳", align: "center" }
        ],
        // 浮标 - 风
        "TABBUOYQIXG1": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "WINDSPD1", title: "风速1", align: "center" }, { field: "WINDDIR1", title: "风向1", align: "center", align: "center" },
            { field: "WINDSPD2", title: "风速2", align: "center" }, { field: "WINDDIR2", title: "风向2", align: "center" },
            { field: "WINDSPD3", title: "风速3", align: "center" }, { field: "WINDDIR3", title: "风向3", align: "center" },
            { field: "WINDSPD4", title: "风速4", align: "center" }, { field: "WINDDIR4", title: "风向4", align: "center" },
            { field: "WINDSPD5", title: "风速5", align: "center" }, { field: "WINDDIR5", title: "风向5", align: "center" },
            { field: "WINDSPD6", title: "风速6", align: "center" }, { field: "WINDDIR6", title: "风向6", align: "center" },
            { field: "WINDSPD7", title: "风速7", align: "center" }, { field: "WINDDIR7", title: "风向7", align: "center" },
            { field: "WINDSPD8", title: "风速8", align: "center" }, { field: "WINDDIR8", title: "风向8", align: "center" },
            { field: "WINDSPD9", title: "风速9", align: "center" }, { field: "WINDDIR9", title: "风向9", align: "center" },
            { field: "WINDSPD10", title: "风速10", align: "center" }, { field: "WINDDIR10", title: "风向10", align: "center" },
            { field: "MAXWINDSPD", title: "最大风速", align: "center" }, { field: "MAXWINDDIR", title: "最大风速风向", align: "center" },
            { field: "MAXWINDTIME", title: "最大风速时间", align: "center" }, { field: "HUGEWINDSPD", title: "极大风速", align: "center" },
            { field: "HUGEWINDDIR", title: "极大风速风向", align: "center" }, { field: "HUGEWINDTIME", title: "极大风速时间", align: "center" },
            { field: "TENMINAVESPD", title: "10分钟平均风速", align: "center" }, { field: "TENMINAVEDIR", title: "10分钟平均风向", align: "center" },
            { field: "INSTANTSPD", title: "瞬时风速", align: "center" }, { field: "INSTANTDIR", title: "瞬时风向", align: "center" },
            { field: "TOWMINAVESPD", title: "2分钟平均风速", align: "center" }, { field: "TOWMINAVEDIR", title: "2分钟平均风向", align: "center" },
            { field: "AVEWINDSPD1", title: "平均风速1", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向1", align: "center" },
            { field: "AVEWINDSPD2", title: "平均风速2", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向2", align: "center" },
            { field: "AVEWINDSPD3", title: "平均风速3", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向3", align: "center" },
            { field: "AVEWINDSPD4", title: "平均风速4", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向4", align: "center" },
            { field: "AVEWINDSPD5", title: "平均风速5", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向5", align: "center" },
            { field: "AVEWINDSPD6", title: "平均风速6", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向6", align: "center" },
            { field: "AVEWINDSPD7", title: "平均风速7", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向7", align: "center" },
            { field: "AVEWINDSPD8", title: "平均风速8", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向8", align: "center" },
            { field: "AVEWINDSPD9", title: "平均风速9", align: "center" }, { field: "AVEWINDDIR1", title: "平均风向9", align: "center" },
            { field: "AVEWINDSPD10", title: "平均风速10", align: "center" }, { field: "AVEWINDDIR10", title: "平均风向10", align: "center" }
        ],
        // 岸基 - 风
        "TABQIXG1": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "WINDSPD1", title: "风速1", align: "center" }, { field: "WINDDIR1", title: "风向1", align: "center" },
            { field: "WINDSPD2", title: "风速2", align: "center" }, { field: "WINDDIR2", title: "风向2", align: "center" },
            { field: "WINDSPD3", title: "风速3", align: "center" }, { field: "WINDDIR3", title: "风向3", align: "center" },
            { field: "WINDSPD4", title: "风速4", align: "center" }, { field: "WINDDIR4", title: "风向4", align: "center" },
            { field: "WINDSPD5", title: "风速5", align: "center" }, { field: "WINDDIR5", title: "风向5", align: "center" },
            { field: "WINDSPD6", title: "风速6", align: "center" }, { field: "WINDDIR6", title: "风向6", align: "center" },
            { field: "WINDSPD7", title: "风速7", align: "center" }, { field: "WINDDIR7", title: "风向7", align: "center" },
            { field: "WINDSPD8", title: "风速8", align: "center" }, { field: "WINDDIR8", title: "风向8", align: "center" },
            { field: "WINDSPD9", title: "风速9", align: "center" }, { field: "WINDDIR9", title: "风向9", align: "center" },
            { field: "WINDSPD10", title: "风速10", align: "center" }, { field: "WINDDIR10", title: "风向10", align: "center" },
            { field: "AVESPD", title: "平均风速", align: "center" }, { field: "AVEDIR", title: "平均风向", align: "center" }
        ],
        // 浮标 - 气压
        "TABBUOYQIXG2": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "PRESSURE1", title: "气压1", align: "center" }, { field: "PRESSURE2", title: "气压2", align: "center" }, { field: "PRESSURE3", title: "气压3", align: "center" },
            { field: "PRESSURE4", title: "气压4", align: "center" }, { field: "PRESSURE5", title: "气压5", align: "center" }, { field: "PRESSURE6", title: "气压6", align: "center" },
            { field: "PRESSURE7", title: "气压7", align: "center" }, { field: "PRESSURE8", title: "气压8", align: "center" }, { field: "PRESSURE9", title: "气压9", align: "center" },
            { field: "PRESSURE10", title: "气压10", align: "center" }, { field: "MAXPRESSURE", title: "最高气压", align: "center" }, { field: "MAXPRESSURETIME", title: "最高气压时间", align: "center" },
            { field: "MINPRESSURE", title: "最低气压", align: "center" }, { field: "MINPRESSURETIME", title: "最低气压时间", align: "center" }
        ],
        // 岸基 - 气压
        "TABQIXG2": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "PRESSURE", title: "气压", align: "center" }
        ],
        // 浮标 - 气温
        "TABBUOYQIXG3": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "AIRTEM1", title: "气温1", align: "center" }, { field: "AIRTEM2", title: "气温2", align: "center" }, { field: "AIRTEM3", title: "气温3", align: "center" },
            { field: "AIRTEM4", title: "气温4", align: "center" }, { field: "AIRTEM5", title: "气温5", align: "center" }, { field: "AIRTEM6", title: "气温6", align: "center" },
            { field: "AIRTEM7", title: "气温7", align: "center" }, { field: "AIRTEM8", title: "气温8", align: "center" }, { field: "AIRTEM9", title: "气温9", align: "center" },
            { field: "AIRTEM10", title: "气温10", align: "center" }, { field: "MAXAIRTEM", title: "最高气温", align: "center" }, { field: "MAXAIRTEMTIME", title: "最高气温时间", align: "center" },
            { field: "MINAIRTEM", title: "最低气温", align: "center" }, { field: "MINAIRTEMTIME", title: "最低气温时间", align: "center" }
        ],
        // 岸基 - 气温
        "TABQIXG3": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "AIRTEM", title: "气温", align: "center" }
        ],
        // 浮标 - 湿度
        "TABBUOYQIXG4": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "HUMI1", title: "湿度1", align: "center" }, { field: "HUMI2", title: "湿度2", align: "center" }, { field: "HUMI3", title: "湿度3", align: "center" },
            { field: "HUMI4", title: "湿度4", align: "center" }, { field: "HUMI5", title: "湿度5", align: "center" }, { field: "HUMI6", title: "湿度6", align: "center" },
            { field: "HUMI7", title: "湿度7", align: "center" }, { field: "HUMI8", title: "湿度8", align: "center" }, { field: "HUMI9", title: "湿度9", align: "center" },
            { field: "HUMI10", title: "湿度10", align: "center" }, { field: "MAXHUMI", title: "最高湿度", align: "center" }, { field: "MAXHUMITIME", title: "最高湿度时间", align: "center" },
            { field: "MINHUMI", title: "最低湿度", align: "center" }, { field: "MINHUMITIME", title: "最低湿度时间", align: "center" }
        ],
        // 岸基 - 湿度
        "TABQIXG4": [
            {
                field: "DATETIME",
                title: "日期时间",
                formatter: function(value) {
                    return "<span style=\"white-space:nowrap;\">" + moment(value).format("YYYY-MM-DD HH:mm:ss") + "</span>";
                }
                , align: "center"
            },
            { field: "HUMI", title: "湿度", align: "center" }
        ]
    };

    return rst;
}();
