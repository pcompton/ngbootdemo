package dev.philcompton.ngbootdemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

  @GetMapping("/GetMessage")
  public Message getMessage() {
    return new Message(1, "Here is your message!");
  }
}
