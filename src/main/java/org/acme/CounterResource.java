package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.LongAdder;

@Path("/counter")
public class CounterResource {

    private final AtomicInteger count = new AtomicInteger();

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public long get() {
        return count.get();
    }


    @POST
    @Produces(MediaType.TEXT_PLAIN)
    public long increment() {
        return count.addAndGet(1);
    }
}
