package net.echo;

import java.io.IOException;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.britesnow.snow.web.binding.EntityClasses;
import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.britesnow.snow.web.db.hibernate.HibernateDaoHelperImpl;
import com.google.inject.AbstractModule;
import com.google.inject.Inject;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.metapossum.utils.scanner.reflect.ClassesInPackageScanner;


/**
 * TODO: Rename the package and the class name to fit your application naming convention and
 * update /webapp/WEB-INF/snow.properties "snow.webApplicationModules" accordingly
 * TODO: add/remove bindings to fit your application's need
 */
public class EchoConfig extends AbstractModule {
	
    private static Logger log = LoggerFactory.getLogger(EchoConfig.class);

    @Override
    protected void configure() {
        bind(HibernateDaoHelper.class).to(HibernateDaoHelperImpl.class);
    }

    @Provides
    @Singleton
    @Inject
    @EntityClasses
    public Class<?>[] provideEntityClasses() {
        Set<Class<?>> entitySet;
        try {
            entitySet = new ClassesInPackageScanner().findAnnotatedClasses("net.echo.entity", javax.persistence.Entity.class);
            Class<?>[] entityClasses = new Class[entitySet.size()];
            entitySet.toArray(entityClasses);
            return entityClasses;
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new RuntimeException("Cannot get all the enity class: " + e.getMessage());
        }

    }

}
