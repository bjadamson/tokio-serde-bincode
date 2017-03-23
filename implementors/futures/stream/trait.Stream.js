(function() {var implementors = {};
implementors["tokio_serde_bincode"] = ["impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_serde_bincode/struct.ReadBincode.html\" title=\"struct tokio_serde_bincode::ReadBincode\">ReadBincode</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error=<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://docs.serde.rs/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T::<a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Item</a>&gt;</span>","impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_serde_bincode/struct.WriteBincode.html\" title=\"struct tokio_serde_bincode::WriteBincode\">WriteBincode</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()