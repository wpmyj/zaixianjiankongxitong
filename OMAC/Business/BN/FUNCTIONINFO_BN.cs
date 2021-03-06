﻿using System; 
using System.Text;
using System.Data.OracleClient;
using System.Collections.Generic; 
using System.Data;

namespace Business.BN  
{
		public class FUNCTIONINFO_BN
	{
   		     
		public bool Exists(string F_FUNCTIONCODE)
		{
			StringBuilder strSql=new StringBuilder();
			DbAPI dbHelper = new DbAPI();
			strSql.Append("select count(1) from FUNCTIONINFO");
			strSql.Append(" where ");
			                                       strSql.Append(" F_FUNCTIONCODE = :F_FUNCTIONCODE  ");
                            						OracleParameter[] parameters = {
					new OracleParameter(":F_FUNCTIONCODE", OracleType.VarChar,36)			};
			parameters[0].Value = F_FUNCTIONCODE;

			if (dbHelper.ExecuteNonQuery(strSql.ToString(), parameters) > 0)
            {
                return true;
            }
            else 
            {
                return false;
            }    
            
		}
		
				
		
		/// <summary>
		/// 增加一条数据
		/// </summary>
		public void Add(Entity.FUNCTIONINFO model)
		{
			StringBuilder strSql=new StringBuilder();
			DbAPI dbHelper = new DbAPI();
			strSql.Append("insert into FUNCTIONINFO(");			
            strSql.Append("F_FUNCTIONCODE,F_NAME,F_DESCRIPTION,F_CAPTION,F_PRIORITY,F_PARENTID,URL");
			strSql.Append(") values (");
            strSql.Append(":F_FUNCTIONCODE,:F_NAME,:F_DESCRIPTION,:F_CAPTION,:F_PRIORITY,:F_PARENTID,:URL");            
            strSql.Append(") ");            
            		
			OracleParameter[] parameters = {
			            new OracleParameter(":F_FUNCTIONCODE", OracleType.VarChar,36) ,            
                        new OracleParameter(":F_NAME", OracleType.NVarChar) ,            
                        new OracleParameter(":F_DESCRIPTION", OracleType.NVarChar) ,            
                        new OracleParameter(":F_CAPTION", OracleType.NVarChar) ,            
                        new OracleParameter(":F_PRIORITY", OracleType.Number,22) ,            
                        new OracleParameter(":F_PARENTID", OracleType.VarChar,36) ,            
                        new OracleParameter(":URL", OracleType.NVarChar)             
              
            };
			            
            parameters[0].Value = model.F_FUNCTIONCODE;                        
            parameters[1].Value = model.F_NAME;                        
            parameters[2].Value = model.F_DESCRIPTION;                        
            parameters[3].Value = model.F_CAPTION;                        
            parameters[4].Value = model.F_PRIORITY;                        
            parameters[5].Value = model.F_PARENTID;                        
            parameters[6].Value = model.URL;                        
			            dbHelper.ExecuteNonQuery(strSql.ToString(),parameters);
            			
		}
		
		
		/// <summary>
		/// 更新一条数据
		/// </summary>
		public bool Update(Entity.FUNCTIONINFO model)
		{
			StringBuilder strSql=new StringBuilder();
			DbAPI dbHelper = new DbAPI();
			strSql.Append("update FUNCTIONINFO set ");
			                        
            strSql.Append(" F_FUNCTIONCODE = :F_FUNCTIONCODE , ");                                    
            strSql.Append(" F_NAME = :F_NAME , ");                                    
            strSql.Append(" F_DESCRIPTION = :F_DESCRIPTION , ");                                    
            strSql.Append(" F_CAPTION = :F_CAPTION , ");                                    
            strSql.Append(" F_PRIORITY = :F_PRIORITY , ");                                    
            strSql.Append(" F_PARENTID = :F_PARENTID , ");                                    
            strSql.Append(" URL = :URL  ");            			
			strSql.Append(" where F_FUNCTIONCODE=:F_FUNCTIONCODE  ");
						
OracleParameter[] parameters = {
			            new OracleParameter(":F_FUNCTIONCODE", OracleType.VarChar,36) ,            
                        new OracleParameter(":F_NAME", OracleType.NVarChar) ,            
                        new OracleParameter(":F_DESCRIPTION", OracleType.NVarChar) ,            
                        new OracleParameter(":F_CAPTION", OracleType.NVarChar) ,            
                        new OracleParameter(":F_PRIORITY", OracleType.Number,22) ,            
                        new OracleParameter(":F_PARENTID", OracleType.VarChar,36) ,            
                        new OracleParameter(":URL", OracleType.NVarChar)             
              
            };
						            
            parameters[0].Value = model.F_FUNCTIONCODE;                        
            parameters[1].Value = model.F_NAME;                        
            parameters[2].Value = model.F_DESCRIPTION;                        
            parameters[3].Value = model.F_CAPTION;                        
            parameters[4].Value = model.F_PRIORITY;                        
            parameters[5].Value = model.F_PARENTID;                        
            parameters[6].Value = model.URL;                        
            int rows=dbHelper.ExecuteNonQuery(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		
		
		/// <summary>
		/// 删除一条数据
		/// </summary>
		public bool Delete(string F_FUNCTIONCODE)
		{
			
			StringBuilder strSql=new StringBuilder();
			DbAPI dbHelper = new DbAPI();
			strSql.Append("delete from FUNCTIONINFO ");
			strSql.Append(" where F_FUNCTIONCODE=:F_FUNCTIONCODE ");
						OracleParameter[] parameters = {
					new OracleParameter(":F_FUNCTIONCODE", OracleType.VarChar,36)			};
			parameters[0].Value = F_FUNCTIONCODE;


			int rows=dbHelper.ExecuteNonQuery(strSql.ToString(),parameters);
			if (rows > 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		
				
		
		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public Entity.FUNCTIONINFO GetModel(string F_FUNCTIONCODE)
		{
			
			StringBuilder strSql=new StringBuilder();
			DbAPI dbHelper = new DbAPI();
			strSql.Append("select F_FUNCTIONCODE, F_NAME, F_DESCRIPTION, F_CAPTION, F_PRIORITY, F_PARENTID, URL  ");			
			strSql.Append("  from FUNCTIONINFO ");
			strSql.Append(" where F_FUNCTIONCODE=:F_FUNCTIONCODE ");
						OracleParameter[] parameters = {
					new OracleParameter(":F_FUNCTIONCODE", OracleType.VarChar,36)			};
			parameters[0].Value = F_FUNCTIONCODE;

			
			Entity.FUNCTIONINFO model=new Entity.FUNCTIONINFO();
			DataTable ds=dbHelper.GetDataTable(strSql.ToString(),parameters);
			
			if(ds.Rows.Count>0)
			{
                model.F_FUNCTIONCODE = ds.Rows[0]["F_FUNCTIONCODE"].ToString();
                model.F_NAME = ds.Rows[0]["F_NAME"].ToString();
                model.F_DESCRIPTION = ds.Rows[0]["F_DESCRIPTION"].ToString();
                model.F_CAPTION = ds.Rows[0]["F_CAPTION"].ToString();
                if (ds.Rows[0]["F_PRIORITY"].ToString() != "")
                {
                    model.F_PRIORITY = decimal.Parse(ds.Rows[0]["F_PRIORITY"].ToString());
                }
                model.F_PARENTID = ds.Rows[0]["F_PARENTID"].ToString();
                model.URL = ds.Rows[0]["URL"].ToString();

                return model;
			}
			else
			{
				return null;
			}
		}
		
		
		/// <summary>
		/// 获得数据列表
		/// </summary>
		public DataTable GetList(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			DbAPI dbHelper = new DbAPI();
			OracleParameter[] parameters = null;
			strSql.Append("select * ");
			strSql.Append(" FROM FUNCTIONINFO ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
            try { 
                dbHelper.OpenConn("");
                DataTable dt = new DataTable();
                dt = dbHelper.GetDataTable(strSql.ToString(), parameters);
                dbHelper.CloseConn();
                return dt;

            }catch(Exception ex){
                LogBN.WriteLog(typeof(FUNCTIONINFO_BN), "GetDataTable 程序段的异常" + ex);
                return null;
            }
			
		}
		
		/// <summary>
		/// 获得前几行数据
		/// </summary>
		public DataTable GetList(int Top,string strWhere,string filedOrder)
		{
			StringBuilder strSql=new StringBuilder();
			DbAPI dbHelper = new DbAPI();
			OracleParameter[] parameters = null;
			strSql.Append("select ");
			if(Top>0)
			{
				strSql.Append(" top "+Top.ToString());
			}
			strSql.Append(" * ");
			strSql.Append(" FROM FUNCTIONINFO ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			strSql.Append(" order by " + filedOrder);
			return dbHelper.GetDataTable(strSql.ToString(),parameters);
		}

        public string GetFunctionTree(string part)
        {
            try
            {
                DataTable dataTable = GetList("F_PART = " + part);
                DataRow[] rows = dataTable.Select("F_PARENTID='#'");
                StringBuilder funTree = new StringBuilder();
                funTree.Append("[");
                for (int i = 0; i < rows.Length; i++)
                {
                    if (i == rows.Length - 1)
                    {
                        CreatFunctionTree(dataTable, rows[i], ref funTree, false);
                    }
                    else
                    {
                        CreatFunctionTree(dataTable, rows[i], ref funTree, true);
                    }
                }
                funTree.Append("]");
                return funTree.ToString();
            }
            catch (Exception ex)
            {
                LogBN.WriteLog(typeof(DbAPI), "GetFunctionTree 程序段的异常" + ex);
                return null;
            }
        }

        public string GetMinitorFunctionTree()
        {
            try
            {
                DataTable dataTable = GetList("F_PART = '1'");
                DataRow[] rows = dataTable.Select("F_PARENTID='#'");
                StringBuilder funTree = new StringBuilder();
                funTree.Append("[");
                for (int i = 0; i < rows.Length; i++)
                {
                    if (i == rows.Length - 1)
                    {
                        CreatFunctionTree(dataTable, rows[i], ref funTree, false);
                    }
                    else
                    {
                        CreatFunctionTree(dataTable, rows[i], ref funTree, true);
                    }
                }
                funTree.Append("]");
                return funTree.ToString();
            }
            catch (Exception ex)
            {
                LogBN.WriteLog(typeof(DbAPI), "GetFunctionTree 程序段的异常" + ex);
                return null;
            }
            
        }

        private void CreatFunctionTree(DataTable dt, DataRow dr, ref StringBuilder funTree, bool bl)
        {
            funTree.Append("{");
            funTree.Append("\"id\":" + dr["F_FUNCTIONCODE"] + ",");
            funTree.Append("\"text\":\"" + dr["F_NAME"] + "\",");
            funTree.Append("\"level\":0,");
            funTree.Append("\"tag\":\"" + dr["F_PARENTID"] + "\",");
            DataRow[] rows = dt.Select("F_PARENTID='" + dr["F_FUNCTIONCODE"] + "'");
            int i = 0;
            if (rows.Length == 0 && dr["F_LEAF"].ToString() == "1")
            {
                funTree.Append("\"nodes\":");
                funTree.Append(GetMinitorFunctionTree());
                funTree.Append(",");
            }
            if (rows.Length > 0)
            {
                funTree.Append("\"nodes\":");
                funTree.Append("[");
                for (i = 0; i < rows.Length; i++)
                {
                    if (i == rows.Length - 1)
                    {
                        CreatFunctionTree(dt, rows[i], ref funTree, false);
                    }
                    else
                    {
                        CreatFunctionTree(dt, rows[i], ref funTree, true);
                    }                 
                }               
                
                funTree.Append("],");
            }
            if (bl)
            {
                funTree.Append("\"href\":\"" + dr["URL"] + "\"");
                funTree.Append("},");
            }
            else
            {
                funTree.Append("\"href\":\"" + dr["URL"] + "\"");
                funTree.Append("}");
            }
        }

   
	}
}

