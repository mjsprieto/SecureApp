package es.mjsp.tfm.cucumber.stepdefs;

import es.mjsp.tfm.SecureApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = SecureApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
