using System;
    using System.Collections.Generic;
    using System.Text;
    using HP.ST.Fwk.RunTimeFWK.Utilities;
    using HP.ST.Fwk.RunTimeFWK.BindingFWK;
    
    namespace Script
    {
    
    public class TestEntities
    {
    public ISTRunTimeContext Context = null;
    public Dictionary<string, HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource> dataSourceNameToDataSource = new Dictionary<string, HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource>();
    
    protected HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource GetDataSource(string dataSourceName)
    {
    if(!dataSourceNameToDataSource.ContainsKey(dataSourceName))
    	throw new Exception(("A data source with the specified name does not exist."));
    return dataSourceNameToDataSource[dataSourceName];
    }
    public HP.ST.Ext.BasicActivities.StartActivity StartActivity1 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Loop<Loop2Input> Loop2 = null;
    public HP.ST.Ext.BasicActivities.EndActivity EndActivity3 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Sequence Sequence19 = null;
    public HP.ST.Ext.RestActivity.RESTActivityV2<RESTActivityV26Input,RESTActivityV26Output> RESTActivityV26 = null;
    public HP.ST.Ext.RestActivity.RESTActivityV2<RESTActivityV27Input,RESTActivityV27Output> RESTActivityV27 = null;
    public HP.ST.Ext.RestActivity.RESTActivityV2<RESTActivityV215Input,RESTActivityV215Output> RESTActivityV215 = null;
    public HP.ST.Ext.BasicActivities.ConcatenateStringsActivity ConcatenateStringsActivity18 = null;
    
    }
    
    }
    