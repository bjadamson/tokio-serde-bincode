var searchIndex = {};
searchIndex["tokio_serde_bincode"] = {"doc":"`Stream` and `Sink` adaptors for serializing and deserializing values using Bincode.","items":[[3,"ReadBincode","tokio_serde_bincode","Adapts a stream of Bincode encoded buffers to a stream of values by deserializing them.",null,null],[3,"WriteBincode","","Adapts a buffer sink to a value sink by serializing the values as Bincode.",null,null],[11,"new","","Creates a new `ReadBincode` with the given buffer stream.",0,{"inputs":[{"name":"t"}],"output":{"name":"readbincode"}}],[11,"get_ref","","Returns a reference to the underlying stream wrapped by `ReadBincode`.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Returns a mutable reference to the underlying stream wrapped by `ReadBincode`.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consumes the `ReadBincode`, returning its underlying stream.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"poll","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"start_send","","",0,null],[11,"poll_complete","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"close","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"new","","Creates a new `WriteBincode` with the given buffer sink.",1,{"inputs":[{"name":"t"}],"output":{"name":"writebincode"}}],[11,"get_ref","","Returns a reference to the underlying sink wrapped by `WriteBincode`.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Returns a mutable reference to the underlying sink wrapped by `WriteBincode`.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consumes the `WriteBincode`, returning its underlying sink.",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"start_send","","",1,{"inputs":[{"name":"self"},{"name":"u"}],"output":{"name":"startsend"}}],[11,"poll_complete","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"close","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}]],"paths":[[3,"ReadBincode"],[3,"WriteBincode"]]};
initSearch(searchIndex);
