FROM 

ENV USER booklink-be
RUN useradd -m ${USER}

RUN mkdir /app
WORKDIR /app

COPY target/booklink-backend-*.jar /app/booklink-backend.jar

USER ${USER}
ENTRYPOINT ["/usr/bin/java", "-cp", "/app/booklink-backend.jar"]
CMD ["-Dloader.main=com.github.mrazjava.booklink.BooklinkApp", "org.springframework.boot.loader.PropertiesLauncher"]
